require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');
const registration = require('./registration/registration');
const client = new MongoClient(process.env.DB_URL);
const PORT = process.env.Port || 4000;
const app = express();


app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

app.get('/meetAppBd', async function (req, res){
    let data = await moove();
    res.json(data);
});

async function start(){
    try {
        await client.connect({
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log(`Server has been started on ${PORT} port`);
        });
    } catch (e) {
        console.log(`_-_-_-_-_-_-_-_-_-_-_-_-_\nYour error!\n${e}`);
    }
}

const moove = async () => {
    await client.db().collection("users");
    const users = await client.db().collection("users");
    const spisokUsers =  await users.find().toArray();
    return spisokUsers;
}
start();

const reg = async () => {
    await client.db().collection("users");
    const users = await client.db().collection("users");
    await users.insertOne(user);
}