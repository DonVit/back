const express = require('express');
const cors = require('cors');
const mongodb = require('mongodb')


require('dotenv').config()

const PORT = process.env.PORT
const CON_STR = process.env.CON_STR

let app = express()
app.use(cors())
app.use(express.json())

let DB_CONNECTED = false

const getMongoDB = async () => {
    const MongoClient = mongodb.MongoClient;
    const client = await MongoClient.connect(CON_STR, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = await client.db('mern-k8s');
    DB_CONNECTED = true;
    return db;
}

let db = getMongoDB().then(_db=>db=_db);

app.get('/health', (req, res)=>{
    res.send({status: "Ok",  dbStatus: DB_CONNECTED}).status(200)
})

app.get('/entries', async (req, res)=>{
    const entries = await db.collection('entries').find({}).toArray()
    res.send(entries).status(200)
})

app.post('/entry', async(req, res)=>{
    const entry = req.body
    const result = await db.collection('entries').insertOne(entry)
    res.send(result).status(200)
})

app.listen(PORT, ()=>{
    console.log(`started ok on port ${PORT}`)
})