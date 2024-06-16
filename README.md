# FIREBASE-REACT-REDUX-TO-MERN-GmailClone Project

Welcome to the MERN (MongoDB, Express.js, React.js, Node.js) stack project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is an email client application built with React, designed to provide users with a seamless experience for managing their emails. It integrates with a backend API for email operations and Firebase for authentication. The application offers a wide range of features including viewing emails, composing and sending emails, deleting emails, and more. With a focus on responsive design and smooth user interactions, it ensures that users can access their emails on any device with ease. The use of modern technologies and libraries such as Redux Toolkit, Axios, and Framer Motion enhances the functionality and user experience of the application.


## Features

### User Authentication
- **Sign Up and Log In**: Users can create a new account or log in to an existing account using Firebase Authentication.
- **Protected Routes**: Only authenticated users can access the main application features.

### Email Management
- **Inbox**: Displays a list of emails received by the user.
- **Sent Emails**: Allows users to view emails they have sent.
- **Starred Emails**: Users can star important emails for quick access.
- **Drafts**: Users can save drafts of emails they are composing.
- **Delete Emails**: Users can delete unwanted emails.

### Compose and Send Emails
- **New Email Modal**: A modal popup to compose and send new emails.
- **Recipient, Subject, and Message Fields**: Form fields for entering the email details.
- **Submit Email**: Sends the composed email to the recipient through the backend API.

### View Email Details
- **Email Detail View**: Detailed view of a selected email showing the full message, sender, and other details.
- **Formatted Dates**: Dates are displayed in a user-friendly format (IST in this case).

### Responsive UI
- **Mobile Friendly**: The application is responsive and works well on both desktop and mobile devices.
- **Animations**: Uses Framer Motion for smooth animations and transitions.

### Integration with Backend API
- **Fetching Emails**: Fetches emails from the backend API to display in the inbox.
- **Deleting Emails**: Sends a request to the backend API to delete an email.

### Toast Notifications
- **Success and Error Notifications**: Uses react-hot-toast for showing success and error messages to the user.



## Live Demo

You can try out the live demo of the app [here](https://react-redux-firebase-gmailclone.onrender.com).

## Folder Structure

```
project-root/
├── backend/
│   ├── controllers/
│   │   └── emailController.js
│   ├── models/
│   │   └── Email.js
│   ├── routes/
│   │   └── emailRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── app.js
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Body.js
│   │   │   ├── Inbox.js
│   │   │   ├── Login.js
│   │   │   ├── Mail.js
│   │   │   ├── Message.js
│   │   │   ├── Navbar.js
│   │   │   ├── SendEmail.js
│   │   │   └── Signup.js
│   │   ├── redux/
│   │   │   ├── appSlice.js
│   │   │   └── store.js
│   │   ├── firebase.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.css
│   │   └── index.css
│   ├── .env
│   ├── .eslintignore
│   ├── .eslintrc.json
│   ├── .prettierignore
│   ├── .prettierrc
│   ├── package.json
│   ├── package-lock.json
│   └── tailwind.config.js
├── .gitignore
├── README.md
└── package.json

```


## GIF's

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/FIREBASE-REACT-REDUX-TO-MERN-GmailClone/blob/main/Screenshots/ss1.gif" alt="Screenshot 1" width="1000"> 


## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A library for managing application state.
  - **Store**: Centralized state management.
  - **Slices**: Reducers and actions for handling state logic.
- **React Router**: A library for routing in React applications.
  - **RouterProvider**: Provides routing context to the application.
  - **createBrowserRouter**: Creates a router instance for browser-based routing.
  - **useNavigate and useParams**: Hooks for navigation and accessing route parameters.
- **Axios**: A promise-based HTTP client for making API requests.
- **Framer Motion**: A library for animations in React applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **react-icons**: A library for including popular icons in the application.
- **react-hot-toast**: A library for showing toast notifications.

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing email data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

### Firebase
- **Firebase Authentication**: Used for user authentication and managing user sessions.
- **Firestore**: A NoSQL document database for storing additional user data (if needed).

### Development Tools
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: A code formatter for maintaining consistent code style.
- **VS Code**: A source-code editor made by Microsoft for Windows, Linux, and macOS.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/FIREBASE-REACT-REDUX-TO-MERN-GmailClone.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Start the Backend Server: Launch the backend Node.js server.

   ```bash
   cd backend
   node server.js
   ```
4. Start the Frontend Development Server: Run the React development server for the frontend application.

   ```bash
   cd frontend
   npm run dev
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to http://localhost:5173 to view the app.

## Usage

### Frontend Usage

#### Authentication Flow

1. **Sign Up**
   - Navigate to `/signup` route.
   - Fill out the registration form with `email` and `password`.
   - Submit the form to create a new account.

2. **Log In**
   - Navigate to `/login` route.
   - Enter your registered `email` and `password`.
   - Upon successful login, you will receive a JWT token.

3. **Log Out**
   - Click on the "Log Out" button to clear the JWT token and log out the user.

#### Email Management

1. **View Inbox**
   - Upon successful login, you will be directed to view your inbox (`/` route).
   - All received emails will be displayed.

2. **Compose Email**
   - Click on the "Compose" button to open the email composition form.
   - Enter recipient (`to`), `subject`, and `message`.
   - Click "Send" to send the email.

3. **View Email Details**
   - Click on any email in the inbox to view its details.
   - The email's `subject`, `to`, `message`, and timestamp will be displayed.

4. **Delete Email**
   - While viewing an email, click on the "Delete" button to delete the email.

### Notes

- Ensure MongoDB is running and accessible for the backend to store and retrieve data.
- JWT tokens are used for authentication and authorization purposes.
- Adjust frontend routes (`RouterProvider`) and backend routes (`express.Router`) as needed based on your project structure and requirements.

Enjoy managing your emails with the Gmail Clone application!


## API Endpoints and Usage

### Backend API Endpoints

#### Authentication

- **POST `/api/v1/auth/signup`**
  - **Description**: Register a new user.
  - **Body**: `{ email, password }`
  - **Response**: Returns a JWT token upon successful registration.

- **POST `/api/v1/auth/login`**
  - **Description**: Log in an existing user.
  - **Body**: `{ email, password }`
  - **Response**: Returns a JWT token upon successful login.

- **GET `/api/v1/auth/logout`**
  - **Description**: Log out the current user.
  - **Authorization**: Bearer Token (JWT)
  - **Response**: Clears the JWT token from the client.

#### Email Management

- **GET `/api/v1/email/getallemails`**
  - **Description**: Retrieve all emails.
  - **Authorization**: Bearer Token (JWT)
  - **Response**: Returns an array of email objects.

- **POST `/api/v1/email/create`**
  - **Description**: Create a new email.
  - **Body**: `{ to, subject, message }`
  - **Authorization**: Bearer Token (JWT)
  - **Response**: Returns the created email object.

- **GET `/api/v1/email/:id`**
  - **Description**: Retrieve a specific email by ID.
  - **Params**: `id` (Email ID)
  - **Authorization**: Bearer Token (JWT)
  - **Response**: Returns the email object with the specified ID.

- **DELETE `/api/v1/email/:id`**
  - **Description**: Delete a specific email by ID.
  - **Params**: `id` (Email ID)
  - **Authorization**: Bearer Token (JWT)
  - **Response**: Returns a success message upon deletion.

#### User Profile

- **GET `/api/v1/user/profile`**
  - **Description**: Retrieve user profile information.
  - **Authorization**: Bearer Token (JWT)
  - **Response**: Returns user profile details.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **Firebase**: A platform developed by Google for creating mobile and web applications. Visit [Firebase](https://firebase.google.com/) for more information.

- **Redux**: A predictable state container for JavaScript apps. Visit [Redux](https://redux.js.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information.


## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

