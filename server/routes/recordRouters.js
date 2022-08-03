
import express from "express";
import { getRecord, deleteRecord, updateRecord, createRecord, getAllRecords } from "../controllers/RecordController.js";
const router = express.Router();

//http://localhost:5000/Records

router.get('/', getAllRecords);
router.get('/:id', getRecord);
router.put('/:id', updateRecord);
router.post('/add', createRecord);
router.delete('/:id', deleteRecord);


export default router;