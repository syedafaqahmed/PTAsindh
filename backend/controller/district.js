///const { getDatabase } = require("firebase/database");
import  firebaseConfig from './db.js'

import { initializeApp } from "firebase/app";

import { getDatabase, ref, set, onChildAdded, child, push } from 'firebase/database'
const app = initializeApp(firebaseConfig);

const db= getDatabase(app)
const districtdef = ref(db, 'District')
export const addNewDistrict = (req, res) =>{
    if(req.body.Key==""){
        req.body.Key = push(districtdef).key
    }
    var newChild = child(districtdef, req.body.Key)
    set(newChild, req.body)
    res.json('Record Insert')

}