import express from 'express'
import { addNewDistrict } from '../controller/district.js'



const router = express.Router()

router.post('/addNewDis',addNewDistrict)

export default router




