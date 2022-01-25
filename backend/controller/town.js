//import  firebaseConfig from './db.js'
  import  firebaseConfig from './db.js'
  import { initializeApp } from "firebase/app";

  import { getDatabase, ref, set, onChildAdded, child, push } from 'firebase/database'
  
  const app = initializeApp (firebaseConfig); 

const db = getDatabase(app) 
const townref = ref (db , 'Town') 

export const addnewtown = (req,res) => {
    if(req.body.key=='')
    {
        req.body.key= push (townref).key
    }
    var newchild =child(townref,req.body.key)
    set(newchild,req.body)
    res.json("Record Insert")
}