# Hazer Mates App

This repository contains a simple Node/Express backend with a React + Vite frontend.

## Prerequisites
- Node.js 18+
- npm
- PostgreSQL database

## Setup

### Backend
1. Copy `backend/.env.example` to `backend/.env` and set your values.
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Generate Prisma client and apply migrations if needed:
   ```bash
   npx prisma generate
   ```
4. Run in development mode:
   ```bash
   npm run dev
   ```

### Frontend
1. Copy `frontend/.env.example` to `frontend/.env` and adjust `VITE_API_BASE_URL`.
2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available on `http://localhost:3000` by default and will make requests to the backend based on `VITE_API_BASE_URL`.

## API Endpoints

- `GET /api/products` - list all products
- `POST /api/products` - create a new product
- `GET /api/orders` - list all orders
- `GET /api/stats` - get basic statistics

