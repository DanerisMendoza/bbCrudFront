BABY PRODUCTS

A modular full-stack application to manage baby products, with a Laravel API backend and a React + Vite + TypeScript + TanStack Query frontend. Features full CRUD and toast notifications.

Features

REST API with Laravel

Modular React frontend

CRUD operations: Create, Read, Update, Delete

Responsive UI with Tailwind CSS

Notifications via react-toastify

TypeScript type safety

Modular architecture

Prerequisites

PHP >= 8.x

Composer

Node.js >= 18.x

NPM or Yarn

MySQL or other DB supported by Laravel

Backend Setup (Laravel API)

git clone https://github.com/DanerisMendoza/bbCrudBack

Install dependencies

composer install


Environment setup

cp .env.example .env


Update .env with your DB credentials.

Generate app key

php artisan key:generate


Run migrations & seeders

php artisan migrate --seed


Run the server

php artisan serve


API will be available at http://127.0.0.1:8000/api/products


Frontend Setup (React + Vite)

git clone https://github.com/DanerisMendoza/bbCrudFront

Navigate to frontend folder

Install dependencies

npm install


Start development server

npm run dev


Frontend will run at http://localhost:5173

Environment

Axios in app/api/axios.ts points to backend http://127.0.0.1:8000/api