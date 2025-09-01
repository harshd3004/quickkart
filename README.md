# 🛒 Quickkart

Quickkart is a full-stack e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). Designed for speed, clarity, and scalability, it offers a seamless shopping experience with essential features for both customers and administrators.

## 🚀 Features

- 🧾 Product listing with dynamic filtering and search
- 🛍️ Add to cart, checkout, and order placement
- 🔐 User authentication and role-based access
- 📦 Admin dashboard for managing products and orders
- 💳 Payment integration-ready (placeholder for future Stripe/Razorpay)
- 📱 Responsive design for mobile and desktop

## 🧱 Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | React.js, Redux Toolkit, Tailwind CSS |
| Backend      | Node.js, Express.js |
| Database     | MongoDB (Mongoose ORM) |
| Auth         | JWT, bcrypt |
| Deployment   | Render / Vercel / MongoDB Atlas |

## 📁 Folder Structure

```
quickkart/
├── client/         # React frontend
│   ├── components/
│   ├── pages/
│   └── redux/
├── server/         # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
└── README.md
```

## 🛠️ Setup Instructions

1. Clone the repo  
   `git clone https://github.com/yourusername/quickkart.git`

2. Install dependencies  
   ```bash
   cd client && npm install  
   cd ../server && npm install
   ```

3. Configure environment variables  
   Create `.env` files in both `client` and `server` folders for API keys, DB URI, JWT secrets, etc.

4. Run the app  
   ```bash
   cd server && npm run dev  
   cd client && npm start
   ```

## 📌 Status

This project is under active development. 

## 📄 License

MIT License

---