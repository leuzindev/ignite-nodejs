import express, { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router()

router.use(express.json())

router.use(categoriesRoutes)
router.use(specificationsRoutes)

export { router }