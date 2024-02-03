# EduSphere E-Learning Platform

EduSphere is a full-featured e-learning platform built with the MERN stack (MongoDB, Express.js, React, Node.js).

## Table of Contents

- [Overview](#overview)
- [Components](#components)
- [Technology Stack](#technology-stack)
- [Environment Setup](#environment-setup)
- [Deployment](#deployment)

## Technology Stack

- **Frontend**: React, Redux Toolkit, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js, MongoDB, bcryptjs
- **Development Tools**: ESLint, PostCSS, Autoprefixer, nodemon

## Environment Setup

To set up the development environment:

0. Set up a MongoDB instance (use Atlas for test deployment) and copy the connection string.
1. Clone the repository.
2. Install dependencies with `npm install` in both the client folder and the root folder.
3. Create a `.env` file with necessary environment variables. (`MONGO`: MongoDB connection string, `JWT_SECRET`: Secret for JWT auth)
4. Start the development server with `npm run dev` in the client directory.
5. Start the backend server with `npm run dev` in the root directory. You should be able to access the site at `http://localhost:5173`.

## Deployment

To deploy EduSphere:

0. Set up a MongoDB instance (use Atlas for test deployment) and copy the connection string.
1. Create a `.env` file with necessary environment variables; or set this during deployment at a managed deployment provider like Render. (`MONGO`: MongoDB connection string, `JWT_SECRET`: Secret for JWT auth)
2. Build the frontend with `npm run build` in the root directory.
3. Run the backend server with `npm run start` in the root directory.

Render handles scaling and load balancing, and you can monitor performance and logs via the Render dashboard.
