import express from "express";
import {getData, addData} from "../controllers/data-controller.js"

const router = express.Router();

router.get('/get',getData)
router.post('/add',addData)

export default router;