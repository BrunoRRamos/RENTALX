/* eslint-disable import-helpers/order-imports */
/* eslint-disable import/no-extraneous-dependencies */
import { Router } from "express";
import { Category } from "../model/Categoriy";

const categorieRoutes = Router();
const categories: Category[] = [];

categorieRoutes.post("/categories", (req, res) => {
    const { name, description } = req.body;

    const category = new Category();
    Object.assign(category, {
        name,
        description,
    });
    categories.push(category);

    return res.status(201).send(category);
});

export { categorieRoutes };
