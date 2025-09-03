const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');

//db connection
connectDB();

//middlewares
app.use(express.json());

//routes
const routes = require("./routes");
app.use("/api/auth", routes.authRoutes);
app.use("/api/orders", routes.orderRoutes);
app.use("/api/products", routes.productRoutes);

app.listen(5000, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});