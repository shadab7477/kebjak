<div align="center">

# 🎁 Kenjac' Creations 🎁

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?logo=typescript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?logo=tailwind-css&logoColor=white&style=for-the-badge)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.14-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white&style=for-the-badge)](https://www.docker.com/)

<p align="center">
  <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=315" alt="Kenjac' Creations Banner" width="600">
</p>

**A modern, SEO-optimized e-commerce platform for handcrafted customized gifts, event decorations, and unique creations for all special occasions.**

[✨ Features](#-features) • 
[🚀 Quick Start](#-quick-start) • 
[🛠️ Installation](#%EF%B8%8F-installation) • 
[🐳 Docker Setup](#-docker-setup) • 
[📁 Project Structure](#-project-structure) • 
[🧰 Technologies](#-technologies)

</div>

## ✨ Features

- 🎨 **Beautiful UI/UX Design** - Modern, responsive interface built with Tailwind CSS
- 🔍 **SEO Optimized** - Structured data, meta tags, and semantic HTML for better search rankings
- 🚀 **Performance Optimized** - Code splitting, lazy loading, and optimized assets
- 📱 **Fully Responsive** - Works perfectly on all devices and screen sizes
- 🛒 **Product Showcase** - Beautifully display products with categories and featured items
- 📸 **Gallery** - Visual showcase of completed projects and creations
- 💬 **Testimonials** - Display customer reviews and feedback
- 🔄 **Social Media Integration** - Facebook feed and social sharing capabilities

## 🚀 Quick Start

The fastest way to get started is using Docker:

```bash
# Clone the repository
git clone https://github.com/yourusername/kenjac-creations.git
cd kenjac-creations

# Start the application with Docker
docker-compose up
```

The application will be available at http://localhost:3000

## 🛠️ Installation

### Prerequisites

- Node.js 18+ and npm
- Git

### Without Docker

```bash
# Clone the repository
git clone https://github.com/yourusername/kenjac-creations.git
cd kenjac-creations

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🐳 Docker Setup

This project is fully dockerized for easy development and deployment.

### Prerequisites

- Docker
- Docker Compose

### Commands

| Command | Description |
|---------|-------------|
| `docker-compose up` | Start the application in development mode |
| `docker-compose up --build` | Build and start the application |
| `docker-compose down` | Stop the application |

## 📁 Project Structure

```
kenjac-creations/
├── client/               # Frontend React application
│   ├── public/           # Public assets
│   ├── src/              # Source files
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utility functions and hooks
│   │   └── ...          # Other source files
├── public/               # Static assets
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🧰 Technologies

### Frontend
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Typed superset of JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling
- **React Router** - Declarative routing for React
- **React Query** - Data fetching library
- **React Helmet** - Document head manager

### Development & Deployment
- **Docker** - Containerization platform
- **ESLint** - JavaScript linter
- **Prettier** - Code formatter

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

<div align="center">

Made with ❤️ by Kenjac' Creations

</div>
