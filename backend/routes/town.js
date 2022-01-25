import express from  'express' 
import { addnewtown } from '../controller/town.js'
// import { addnewTown } from './contrller/town.js' 

const router = express.Router() 
router.post ('/addnewTown', addnewtown) 
export default router