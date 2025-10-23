# Hospital Scheduling App

Team name : Vetcare
Team member :
Mudavath Kalyan
Malavath Rahul
Korra Praveen
Keerthi

## Overview
The Hospital Scheduling App is a monolithic application built using the MERN stack (MongoDB, Express, React, Node.js) with a Vite React frontend. This application allows for efficient management of patients, doctors, and appointment scheduling.

## Features
- **Patient Management**: Add, edit, and view patient information.
- **Doctor Management**: Add, edit, and view doctor information.
- **Appointment Booking**: Book new appointments based on available slots.
- **Appointment Rescheduling**: Reschedule existing appointments.
- **Appointment Cancellation**: Cancel appointments as needed.
- **Dashboard**: View statistics and summaries for staff.

## Technologies Used
- **Frontend**: React, Vite, TypeScript
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB
- **Styling**: CSS Modules (or any preferred styling method)

## Project Structure
```
hospital-scheduling-app
├── client                # Frontend application
│   ├── src               # Source files for React app
│   ├── public            # Public assets
│   └── package.json      # Frontend dependencies and scripts
├── server                # Backend application
│   ├── src               # Source files for Express app
│   └── package.json      # Backend dependencies and scripts
├── .env                  # Environment variables
├── docker-compose.yml    # Docker configuration
├── Dockerfile            # Dockerfile for building the app
├── package.json          # Main project dependencies and scripts
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- Docker (optional, for containerization)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd hospital-scheduling-app
   ```

2. Install dependencies for the server:
   ```
   cd server
   npm install
   ```

3. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

### Running the Application

#### Using Docker
1. Build and run the Docker containers:
   ```
   docker-compose up --build
   ```

#### Without Docker
1. Start the backend server:
   ```
   cd server
   npm run dev
   ```

2. Start the frontend application:
   ```
   cd client
   npm run dev
   ```

### Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
MONGODB_URI=<your_mongodb_connection_string>
PORT=5000
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
