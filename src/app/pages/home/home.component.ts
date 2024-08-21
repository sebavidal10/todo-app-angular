import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal<Task[]>([]);

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  constructor() {
    effect(() => {
      const tasks = this.tasks();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  }

  injector = inject(Injector);

  ngOnInit() {
    const storage = localStorage.getItem('tasks');
    if (storage) {
      const tasks = JSON.parse(storage);
      this.tasks.set(tasks);
    }
    this.trackTasks();
  }

  trackTasks() {
    effect(
      () => {
        const tasks = this.tasks();
        console.log(tasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      },
      { injector: this.injector }
    );
  }

  filter = signal<'all' | 'pending' | 'completed'>('all');
  tasksByFilter = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks();
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }
    if (filter === 'pending') {
      return tasks.filter((task) => !task.completed);
    }
    return tasks;
  });

  changeFilter = (filter: 'all' | 'pending' | 'completed') => {
    this.filter.set(filter);
  };

  changeHandler() {
    if (this.newTaskCtrl.valid) {
      const value = this.newTaskCtrl.value.trim();
      if (value !== '') {
        this.addTask(value);
        this.newTaskCtrl.setValue('');
      }
    }
  }

  addTask = (title: string) => {
    const nextId =
      this.tasks().reduce((max, task) => (task.id > max ? task.id : max), 0) +
      1;
    this.tasks.update((tasks) => [
      ...tasks,
      { id: nextId, title, completed: false },
    ]);
  };

  deleteTask = (index: number) => {
    const tt = this.tasks().filter((task, i) => task.id !== index);
    this.tasks.update((tasks) => tt);
  };

  updateTask = (currentId: number) => {
    this.tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === currentId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  updateTaskEditingMode = (currentId: number) => {
    this.tasks.update((prevState) => {
      return prevState.map((task) => {
        if (task.id === currentId) {
          return { ...task, editing: true };
        } else {
          return { ...task, editing: false };
        }
      });
    });
  };

  updateTaskEditingText = (currentId: number, event: Event) => {
    const input = event.target as HTMLInputElement;
    this.tasks.update((prevState) => {
      return prevState.map((task) => {
        if (task.id === currentId) {
          return { ...task, title: input.value, editing: false };
        }
        return task;
      });
    });
  };
}
