# 🛒 Add to Cart App using React Router

This project is a simple e-commerce Add-to-Cart application built using **ReactJS** and **React Router**, with data fetched from the **Fake Store API**.  
The app includes full cart functionality such as Add, Remove, Quantity Control, and Price Calculation with Discount.

---

## 🚀 Tech Stack

- **ReactJS**
- **React Router DOM**
- **Tailwind CSS**
- **JavaScript**
- **Fake Store API**

---

## 📌 Features

### ✔ Product Page

- Fetches product list from Fake Store API
- Displays product image, title, price, and description
- Responsive product grid
- "Add to Cart" + "Remove from Cart" buttons (dynamic)

### ✔ Cart Page

- Shows items added to cart
- Increase/Decrease quantity
- Remove individual items
- Item-level total = price × quantity
- Total cart price
- 10% discount applied
- Final price calculation

### ✔ Global Cart State

Implemented using **React Context API**.

---

## 📂 Folder Structure

src/
context/
CartContext.jsx
pages/
ProductsPage.jsx
CartPage.jsx
App.jsx
main.jsx
index.css

## 🔗 API Used

Fake Store API  
https://fakestoreapi.com/products
