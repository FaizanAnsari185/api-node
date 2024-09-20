const express = require("express");

const dotenv = require("dotenv").config();


const app = express();

const port = process.env.PORT || 5000;

app.use("/api/contact", require("./routes/contactRoutes"));

// app.get('', (req, res) => {
//     res.json({ message:"Mohammad Faizan" })
// });

// app.get('', (req, res) => {
//     res.status(200).json({ message:"Mohammad Faizan" })
// });


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
