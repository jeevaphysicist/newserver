const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

// Import routes
const UserRoutes = require("./routes/user");
const OrderRoutes = require("./routes/order");

mongoose.connect("mongodb://localhost:27017/newServer");
mongoose.connection.on('connected',()=>{
     console.log("Mongodb connected successfully!");
})
mongoose.connection.on('disconnected',()=>{
    console.log("Mongodb Disconnected successfully!");
})

app.use(express.json());
app.use("/api/user",UserRoutes);
app.use("/api/order",OrderRoutes);

app.listen(PORT,()=>{
     console.log("Server  Running on Port:",PORT);
})