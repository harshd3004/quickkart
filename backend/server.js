const express = require("express");
const port = 5000;
const app = express();

app.use(express.json());

const authRoutes = require("./routes/auth.routes");
const orderRoutes = require("./routes/order.routes");
const productRoutes = require("./routes/product.routes");

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

app.listen(5000, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});