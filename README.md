# My Day - Todo App 🚀

A modern, fast, and lightweight To-Do application built with **Angular 18**. This project is part of a learning path in Platzi's Angular courses, focusing on the latest features of the framework.

[![Deploy to Firebase](https://img.shields.io/badge/Deploy-Firebase-FFCA28?style=flat&logo=firebase&logoColor=white)](https://todoapp-angular-1d7c4.web.app)

## 🌟 Features

- **Task Management**: Create, edit, and delete tasks easily.
- **Status Persistence**: All tasks are saved in `localStorage`, so your data persists even after closing the browser.
- **Smart Filtering**: Filter tasks by status: _All_, _Pending_, or _Completed_.
- **Reactive Interface**: Built using **Angular Signals** for optimal state management and performance.
- **Inline Editing**: Double-click on any task to edit its title directly.

## 🛠️ Technologies & Techniques

- **Angular 18**: Utilizing the latest standalone components and signals.
- **Reactive Forms**: For clean and efficient input handling.
- **LocalStorage API**: For local data persistence.
- **CSS3**: Custom styles (following the TodoMVC aesthetic).
- **Firebase Hosting**: For fast and secure deployment.

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

This project is configured for **Firebase Hosting**.

### How to Deploy

1.  **Firebase Tools**: Ensure you have the Firebase CLI installed:

    ```bash
    npm install -g firebase-tools
    ```

2.  **Authentication**: Login to your Firebase account (if you haven't already):

    ```bash
    firebase login
    ```

3.  **One-step Deploy**: Use the custom script added to `package.json`:
    ```bash
    npm run deploy
    ```
    _This command will build the project and deploy it to Firebase in a single step._

The live application is available at:
👉 [https://todoapp-angular-1d7c4.web.app](https://todoapp-angular-1d7c4.web.app)

## 📈 Current Status

This project is fully functional and serves as a robust base for a task management application. It demonstrates core Angular concepts like:

- Components & Directives.
- Signals (`signal`, `computed`, `effect`).
- Reactive Forms.
- Data persistence.
- CI/CD concepts via Firebase.
