import express from "express";

const app = express();
const port = 3333;

app.listen(port, () => console.log(`listening on port: localhost:${port}`));

app.get("/", (req, res) => {
    res.json({ message: "batata" });
});