Ecommerce Website Frontend
This is the frontend for an ecommerce website built using React and Redux. The website allows users to browse through a list of products, view product details, add products to the cart, and manage the cart items. It also provides functionality for sorting products by price and creating new products.

Getting Started
To run the frontend locally, follow the instructions below:

Prerequisites
Make sure you have Node.js and npm installed on your machine.

Installation
Clone the repository to your local machine.
bash
Copy code
git clone https://github.com/itstarvendr/Ecommerce-Website-Frontend.git
Change to the project directory.
bash
Copy code
cd ecommerce-frontend
Install the required dependencies.
bash
Copy code
npm install
Usage
To start the development server, run the following command:

bash
Copy code
npm start


Features
Navbar: Displays the cart items count and relevant navigation links.
All Products Page: Shows a list of products fetched from the API. Each product can be edited or deleted, and there is a sort button to sort products by price.
Product Detail Page: Displays all the details of a selected product and allows adding the product to the cart.
Create Page: Allows adding a new product to the database.
Cart Page: Displays all the items in the cart and allows removing items from the cart.
Error Handling: Displays appropriate error alerts for API requests.
Redux: Uses Redux for state management, making the cart items persistent even after a page refresh.
API

Built With
React - JavaScript library for building user interfaces
Redux - State management library
React Router - Declarative routing for React applications
Axios - Promise-based HTTP client for making API requests
Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue. If you'd like to contribute code, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make changes and commit them.
Push your branch to your fork.
Submit a pull request.
