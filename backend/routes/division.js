import express from 'express'

import {addNewDivision} from '../controller/division.js'

const router = express.Router()

router.post('/addNewDiv',addNewDivision)

export default router
