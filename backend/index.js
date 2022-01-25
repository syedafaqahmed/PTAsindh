import express from "express" 
import cors from "cors" 



const PORT = 2000
const app =express()

app.use(express.urlencoded({extended:true}))
app.use(express.json()) 

import division from './routes/division.js'
app.use('/division',division)

import dist from './routes/district.js' 
app.use('/district' , dist)

import town from './routes/town.js' 
app.use('/town',town)

app.listen(PORT,()=>{console.log("serve is running")})