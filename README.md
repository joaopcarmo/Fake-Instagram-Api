# 📸 Mini Instagram Clone - Alura Back-End Immersion

This repository contains a simplified **Instagram-style API**, developed during the **Alura Back-End Immersion** using **JavaScript**, **Node.js**, **Express**, and **MongoDB**. The project allows users to create and manage image posts, while exploring essential back-end concepts.

## 🚀 What You'll Learn

Throughout this project, we built a complete back-end API step by step, including:

- Setting up a Node.js and Express server
- Creating routes for posting content
- Handling file uploads (images) with the File System (fs)
- Connecting to MongoDB Atlas
- Performing CRUD operations on a MongoDB collection
- Testing APIs with Thunder Client and Postman
- Applying best practices for project organization and structure

## 🛠️ Technologies Used

- JavaScript (ES6+)
- Node.js
- Express
- MongoDB Atlas
- Mongoose (ODM)
- File System (`fs`)
- Thunder Client / Postman

## 🌐 API Endpoints

### 🔸 Posts

- POST /posts  
  Create a new post with image upload

- GET /posts  
  List all posts (with image paths and metadata)

> All post data is saved in MongoDB, and images are stored in the `/uploads` folder.

## ⚙️ How to Run Locally

1. Clone the repository:

    git clone https://github.com/joaopcarmo/ImersaoBackAlura.git

2. Navigate into the project:

    cd ImersaoBackAlura

3. Install dependencies:

    npm install

4. Configure the environment:
   - Create a `.env` file in the root folder
   - Add your MongoDB Atlas connection string:

        MONGODB_URI=your_mongo_connection_string_here

5. Start the server:

    npm run dev

6. Access the API at:

    http://localhost:3000

## 📤 Image Upload Example

When sending a POST request to `/posts`, include:

- An image file (form-data key: `image`)
- Optional JSON fields like `title`, `description`, etc.

Use Thunder Client or Postman for testing file upload with form-data.

## 🧠 Concepts in Practice

- RESTful API design
- MongoDB Atlas integration
- Image upload with Node's `fs` module
- Modular code structure (controllers, services, routes)
- Environment configuration using `.env`

## 👨‍💻 Author

Created by [João P. Carmo](https://github.com/joaopcarmo) as part of the **Back-End Immersion** by [Alura](https://www.alura.com.br/).
