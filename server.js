const express = require("express");
const app = express();
const PORT =  process.env.PORT || 3000;

app.use(express.static("public"));

const orders = [
    'An order for Robert of jasmine tea x 2',
    'An order for Clay of Green Tea x 3',
    'An order for Dylan of Black Tea x 1'
];

app.get("/", (req, res) => {
    res.send(`<a href="/order-form.html">order a drink</a>`);
});

app.get("/complete-order", (req, res) => {
    const firstName = req.query.firstName;
    const product = req.query.product;
    const quantity = req.query.quantity;

    orders.push(`An order for ${firstName} of ${product} x ${quantity}`);

    console.log(orders);

    res.send(`
            <h1> Thank you for your order </h1>
            <p> Thanks ${firstName}! </p>
            <p> Your ${product} x ${quantity} will be ready shortly </p>
            <p><a href="/order-form.html">Order a new one</a></p>
        `);
});

app.get("/current-orders", (req, res) => {
    const orderNo = req.query.orderNo;
    res.send("hello..." + orders[orderNo]);
});

app.get("/all-orders", (req, res) => {
    const htmlListItems = orders.map((order) => {
        return `<li> ${order} </li>`
    });
    console.log(htmlListItems);
    const html = htmlListItems.join("\n");
    console.log(html);
    res.send(`
        <!DOCTYPE HTML>
            <ol>
                ${html}
            </ol>
        `);
});

app.get("/all-orders-2", (req, res) => {

    res.send(`
        <!DOCTYPE HTML>
            <ul>
                ${orders.map(order => `<li> ${order} </li>`).join("\n")}
            </ul>
        `);
});

app.get("/all-orders-for-loop", (req, res) => {
    let htmlListItems = "";
    for (let i = 0; i < orders.length; i++) {
        htmlListItems = htmlListItems + `<li> ~~ ${orders[i]} ~~ </li>`;
    }
    res.send(`
        <!DOCTYPE HTML>
            <ol>
                ${htmlListItems}
            </ol>
        `);
});


app.listen(PORT, () => {
    console.log("Starting server at " + PORT);
});