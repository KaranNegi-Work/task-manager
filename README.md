
# Task Management Service

This is a simple task management service built with Node.js, Express.js, Sequelize, and PostgreSQL. The service includes API endpoints to create, retrieve, update, and delete tasks. Each task has a title, an optional description, a completion status, and timestamps for creation and updates.

## Prerequisites

- Node.js (v12.x or higher)
- npm (v6.x or higher)
- PostgreSQL (v12.x or higher)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/task-management-service.git
cd task-management-service
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and add your database configuration:

```dotenv
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_DIALECT=postgres
PORT=3000
```

### 4. Configure Database

Update the `config/config.json` file with your database credentials:

```json
{
  "development": {
    "username": "your_database_user",
    "password": "your_database_password",
    "database": "your_database_name",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "your_database_user",
    "password": "your_database_password",
    "database": "your_test_database_name",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "your_database_user",
    "password": "your_database_password",
    "database": "your_production_database_name",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

### 5. Run Migrations

(Optional - it will run with npm start)
Run the following command to create the `Tasks` table in your database:

```bash
npx sequelize-cli db:migrate
```

### 6. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`.

### 7. Run Tests

Run the following command to execute the tests:

```bash
npm test
```

## API Endpoints

- **GET /tasks**: Retrieve all tasks
- **POST /task**: Create a new task
- **PUT /task/:id**: Update an existing task
- **DELETE /task/:id**: Delete a task


## Dependencies

- **express**: Web framework for Node.js
- **sequelize**: Promise-based ORM for Node.js
- **pg**: PostgreSQL client for Node.js
- **joi**: Data validation library for JavaScript
- **jest**: JavaScript testing framework
- **supertest**: Super-agent driven library for testing HTTP servers

