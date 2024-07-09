import express from "express";
import {sentMsg} from "../controllers/contact-controller.js"

const router = express.Router();

router.post('/add',sentMsg)

export default router;