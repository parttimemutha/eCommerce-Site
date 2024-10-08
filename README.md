
---

# E-Commerce Platform with Admin, Seller, and Shopper Roles

## Project Overview

This project is a basic e-commerce platform that implements three types of users: **Admin**, **Seller**, and **Shopper**. Each user type has distinct functionalities, and the platform is designed to handle registration, login, product management, and user administration.

### Key Features

1. **User Registration & Login**:
   - Users can register as either an **Admin**, **Seller**, or **Shopper**.
   - Registered users can log in using their credentials.
   - Credentials are checked to ensure that only valid users can access their respective dashboards.
   - Each user type is redirected to the correct dashboard upon login (Admin, Seller, Shopper).

2. **Admin Panel**:
   - The admin can view a list of all registered users (both Sellers and Shoppers).
   - Admins can deactivate users (remove them), preventing those users from logging in again.
   - The list of users is updated dynamically based on new registrations and removals.
  
3. **Seller Dashboard**:
   - Sellers can post new products by entering the product name, price, and quantity.
   - All products posted by sellers are stored globally and are available for shoppers to view immediately.
   - Sellers can also view a list of their previously posted products in their dashboard.

4. **Shopper Dashboard**:
   - Shoppers can view a list of all available products posted by sellers.
   - The product list updates automatically when new products are posted by sellers.

## Project Structure

The project uses React for building the user interface and React Router for handling navigation. The main files and directories are structured as follows:

```
src/
  ├── components/
  │   ├── Admin.jsx           // Admin dashboard with user management
  │   ├── Seller.jsx          // Seller dashboard for product management
  │   └── Shopper.jsx         // Shopper dashboard for viewing products
  ├── pages/
  │   ├── Home.jsx            // Home page
  │   ├── Login.jsx           // User login page
  │   └── Register.jsx        // User registration page
  └── App.jsx                 // Main application logic and routing
```

## Installation Instructions

### Prerequisites
- Node.js and npm must be installed on your machine.

### Setup Steps for Running the Frontend

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Frontend**:
   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000/`.

### Backend Instructions

For the backend, ensure the following:

1. **API Setup**:
   - If a separate backend API is required (e.g., for user authentication, product management), follow the specific backend repository instructions to install and run the API.
   - If no separate backend is needed, ensure all state management is handled correctly in the frontend.

### Running Both Backend and Frontend

- **Running Together**: 
  - If the backend is required, make sure to start the backend server first before starting the frontend.
  - Example for the backend:
    ```bash
    npm run backend
    ```
  - Then, in a separate terminal, run the frontend using:
    ```bash
    npm start
    ```
  - Ensure both servers are running concurrently, and the frontend is properly configured to communicate with the backend (if applicable).

---

> **IMPORTANT**: We require you to have instructions on how to run both the backend and the frontend or the entire app itself. Failure to do so will lose your chance to win the bounty ❌

---

## How It Works

### Registration and Login

- **New Users**: A user can register as either an Admin, Seller, or Shopper by providing a username and password. After registration, the user is redirected to the login page.
- **Login**: Users can log in using the same credentials they used during registration. Once logged in, users are redirected to their respective dashboards.

### Admin Functionality

- **Viewing Users**: Admins can view a list of all registered users (sellers and shoppers). Each user is displayed with their role (either seller or shopper).
- **Removing Users**: Admins can deactivate users by clicking the "Remove" button next to the user's name. Once removed, that user will no longer be able to log in.

### Seller Functionality

- **Posting Products**: Sellers can add new products by entering the product name, price, and quantity. These products are immediately visible to all shoppers.
- **Viewing Posted Products**: Sellers can see a list of all the products they've posted.

### Shopper Functionality

- **Viewing Products**: Shoppers can browse all available products that sellers have posted. The product list updates automatically when new products are posted.

## Additional Information

- **State Management**: User and product information is managed globally using React's `useState` hook in `App.jsx`, ensuring all components have access to shared data (users, products).
- **Routing**: The application uses React Router to manage different routes for each user type (Admin, Seller, Shopper), and users are redirected based on their role.

## Video Demo

[![Video Demo](https://img.youtube.com/vi/pn99vJ_ikIY/0.jpg)](https://youtu.be/pn99vJ_ikIY)

Click on the image above to watch the video demonstration of the application.

## Future Improvements

Some potential enhancements for the future include:
- **Product Purchase Flow**: Allowing shoppers to purchase products and reducing the product quantity accordingly.
- **User Authentication**: Adding token-based authentication for more secure login and session management.
- **Advanced User Management**: Allowing the admin to edit user details or restore previously removed users.

---
