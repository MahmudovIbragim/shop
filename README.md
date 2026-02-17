# 🚀 React Auth & Products App

Modern web application built with **React + TypeScript** using **Feature-Sliced Design (FSD)** architecture.

The project includes authentication, protected routes, and product fetching from a public API.

---

## 🌐 Live Demo

👉 [https://validation-pied-two.vercel.app/]

---

## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- Supabase authentication
- JWT token handling
- Token stored in localStorage
- Protected routes

### 📦 Products
- Fetch products using RTK Query
- Integration with Fake Store API
- Products list page
- Loading & error states

### 🧾 Forms & Validation
- React Hook Form
- Form validation
- Error handling
- Clean UX

---

## 🧱 Architecture

Project follows **Feature-Sliced Design (FSD)**:

src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
└── shared/



This structure ensures scalability and clean separation of concerns.

---

## 🛠 Tech Stack

- React (TSX)
- TypeScript
- RTK Query
- Supabase
- React Hook Form
- Protected Routes
- Module SCSS
- Vite

---

## 🔌 APIs Used

### Authentication
- Supabase Auth

### Products
- https://fakestoreapi.com

---

## ⚙ Installation

```bash
pnpm install
pnpm run dev
