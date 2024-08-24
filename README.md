
# TweetAI Backend

This is the backend server for the TweetAI project. It is built using Node.js, Express, and Sequelize with MySQL as the database.

## Table of Contents

- [Project Setup](#project-setup)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
  - [GET /api/autobots](#get-apiautobots)
  - [GET /api/autobots/:id/posts](#get-apiautobotsidposts)
  - [GET /api/posts/:id/comments](#get-apipostsidcomments)
  - [POST /api/autobots](#post-apiautobots)
  - [PUT /api/autobots/:id](#put-apiautobotsid)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [Swagger API Documentation](#swagger-api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Project Setup

Follow the steps below to set up the project on your local machine.

### Prerequisites

- Node.js (v14 or higher recommended)
- MySQL Server
- npm (Node Package Manager)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/alaacodes/tweetai-backend.git
   cd tweetai-backend
   ```

2. **Install Dependencies**

   Install the necessary packages:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```plaintext
   PORT=3000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=tweetai
   DB_PORT=3306
   API_RATE_LIMIT=100
   ```

   Make sure to replace `yourpassword` with your MySQL password.

4. **Set Up the Database**

   Ensure your MySQL server is running and the database specified in the `.env` file (`tweetai` in this case) exists. You can create the database using the MySQL command line or a GUI tool like MySQL Workbench.

   ```sql
   CREATE DATABASE tweetai;
   ```

5. **Run Database Migrations and Seeders**

   Use Sequelize to synchronize your models with the database:

   ```bash
   npm start
   ```

   This command will also start the server.

6. **Start the Server**

   Run the following command to start the server:

   ```bash
   npm start
   ```

   The server should now be running on `http://localhost:3000`.

## Environment Variables

Ensure the following environment variables are set in your `.env` file:

- **PORT**: The port on which the server will run (default is 3000).
- **DB_HOST**: The database host (usually `localhost`).
- **DB_USER**: The MySQL user.
- **DB_PASSWORD**: The password for the MySQL user.
- **DB_NAME**: The name of the MySQL database.
- **DB_PORT**: The port for MySQL (default is 3306).
- **API_RATE_LIMIT**: The maximum number of requests per minute per IP (used for rate limiting).

## API Documentation

### **GET /api/autobots**

Fetch a paginated list of Autobots.

- **URL**: `/api/autobots`
- **Method**: `GET`
- **URL Params**:
  - `page=[integer]` - Page number (optional, default is 1)
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    [
      {
        "id": 1,
        "name": "Optimus Prime",
        "username": "optimus",
        "email": "optimus@autobots.com"
      },
      {
        "id": 2,
        "name": "Bumblebee",
        "username": "bumblebee",
        "email": "bumblebee@autobots.com"
      }
    ]
    ```

### **GET /api/autobots/:id/posts**

Fetch a paginated list of posts for a specific Autobot.

- **URL**: `/api/autobots/:id/posts`
- **Method**: `GET`
- **URL Params**:
  - `id=[integer]` - ID of the Autobot
  - `page=[integer]` - Page number (optional, default is 1)
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    [
      {
        "id": 1,
        "title": "Autobot Mission",
        "body": "This is a post about a mission.",
        "AutobotId": 1
      }
    ]
    ```

### **GET /api/posts/:id/comments**

Fetch a paginated list of comments for a specific post.

- **URL**: `/api/posts/:id/comments`
- **Method**: `GET`
- **URL Params**:
  - `id=[integer]` - ID of the Post
  - `page=[integer]` - Page number (optional, default is 1)
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    [
      {
        "id": 1,
        "body": "Great post!",
        "PostId": 1
      }
    ]
    ```

### **POST /api/autobots**

Create a new Autobot.

- **URL**: `/api/autobots`
- **Method**: `POST`
- **Data Params**:
  ```json
  {
    "name": "Ironhide",
    "username": "ironhide",
    "email": "ironhide@autobots.com"
  }
  ```
- **Success Response**:
  - **Code**: `201 Created`
  - **Content**:
    ```json
    {
      "id": 3,
      "name": "Ironhide",
      "username": "ironhide",
      "email": "ironhide@autobots.com"
    }
    ```

### **PUT /api/autobots/:id**

Update an existing Autobot.

- **URL**: `/api/autobots/:id`
- **Method**: `PUT`
- **URL Params**:
  - `id=[integer]` - ID of the Autobot
- **Data Params**:
  ```json
  {
    "name": "Ironhide Updated",
    "email": "ironhide_new@autobots.com"
  }
  ```
- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "id": 3,
      "name": "Ironhide Updated",
      "username": "ironhide",
      "email": "ironhide_new@autobots.com"
    }
    ```

## Error Handling

- **500 Internal Server Error**: Indicates a server-side issue. Check logs for more details.
- **404 Not Found**: Indicates the requested resource could not be found.
- **400 Bad Request**: Indicates a malformed request (e.g., missing required fields).

## Rate Limiting

Rate limiting is implemented to restrict the number of requests a user can make in a given time frame. This is controlled by the `API_RATE_LIMIT` environment variable.

## Swagger API Documentation

Swagger documentation is available at: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Use Swagger UI to explore and test the API endpoints directly from your browser.
