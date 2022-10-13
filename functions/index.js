const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Lo9acCdJxd9hXnRZnwBbcEiCCjcrmp5S1AXd3v6ncOXKygUB6Phw3Y4uLcABytq5cDjrGjvoUk1lImB4RhFHvlx00e5etCEoy')

//Api

//App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json());
//API routes

app.get("/",(request,response) => response.status(200).send
('hello world'));
app.post("/payments/create", async(request,response) => {
    const total = request.query.total;
    console.log('payment requst recieve!! for this amount>>> ',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
} );

//listen command
exports.api = functions.https.onRequest(app)