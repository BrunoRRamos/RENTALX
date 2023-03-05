import express from "express";

import { categorieRoutes } from "./routes/categories.routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use(categorieRoutes);
app.listen(port, () => console.log(`listening on port: localhost:${port}`));
