# Edu-Nestify

Edu-Nestify is an open-source education platform built with NestJS and ReactJS, inspired by Moodle. This project aims to provide a comprehensive and customizable solution for online learning, leveraging modern technologies and best practices in web development.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Running with Docker Compose](#running-with-docker-compose)
- [License](#license)

## Features

- **Modular Architecture:** Built with NestJS for a scalable and maintainable backend.
- **Interactive Frontend:** ReactJS for a dynamic and responsive user interface.
- **User Management:** Manage users, roles, and permissions.
- **Course Management:** Create, update, and manage courses and lessons.
- **Assessment Tools:** Quizzes, assignments, and grading.
- **Communication Tools:** Forums, chats, and messaging.
- **API Documentation:** Comprehensive API documentation with Swagger.

## Installation

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- PostgreSQL

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/VickCGX/edu-nestify.git
   cd edu-nestify/backend
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up the database:

   - Create a PostgreSQL database.
   - Copy `.env.example` to `.env` and update the environment variables:

   ```bash
   cp .env.example .env
   ```

4. Run database migrations:

- Make sure to install the necessary Prisma packages in backend project if you haven't done so already:

  ```bash
  yarn add @prisma/client
  yarn add -D prisma
  ```

  ```bash
  npx prisma init
  ```

5. Start the backend server:
   ```bash
   yarn run start:dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the frontend server:
   ```bash
   yarn start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000` for the frontend.
2. The backend server will be running at `http://localhost:4000`.

## Running with Docker Compose

### Prerequisites

- Docker
- Docker Compose

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/VickCGX/edu-nestify.git
   cd edu-nestify
   ```

2. Copy environment variable files for both backend and frontend:

   ```bash
   cp backend/.env.example backend/.env
   cp frontend/.env.example frontend/.env
   ```

3. Update the environment variables in `backend/.env` and `frontend/.env` as necessary.

4. Build and run the containers:
   ```bash
   docker-compose up --build
   ```

### Access the Application

1. Open your browser and navigate to `http://localhost:3000` for the frontend.
2. The backend server will be running at `http://localhost:4000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
