const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello from /");
});

app.get("/complete-order", (req, res) => {
    const firstName = req.query.firstName;
    const product = req.query.product;
    const quantity = req.query.quantity;

    res.send(`
            <h1> Thank you for your order </h1>
            <p> Thanks ${firstName}! </p>
            <p> Your ${product} x ${quantity} will be ready shortly </p>
        `);
});


app.listen(PORT, () => {
    console.log("Starting server at " + PORT);
});