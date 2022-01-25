  import  firebaseConfig from './db.js'

import { initializeApp } from "firebase/app";

import { getDatabase, ref, set, onChildAdded, child, push } from 'firebase/database'
const app = initializeApp(firebaseConfig);

const db = getDatabase(app)
const divisionRef = ref(db, 'Division')

export const addNewDivision = (req, res) => {
    // var key = push(divisionRef).key
    // var newChild = child(divisionRef, key)

    // var objectDivision = req.body
    // objectDivision.key = key
    // set(newChild, objectDivision)
    // res.json('Record Insert')
    if(req.body.Key=="")
    {
      req.body.Key = push(divisionRef).key
    }
    var newChild = child(divisionRef, req.body.Key)

    set(newChild, req.body)
    res.json('Record Insert')
}


