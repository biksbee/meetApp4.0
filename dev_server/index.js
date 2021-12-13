const express = require('express');
const {MongoClient} = require('mongodb');
const cors = require('cors');
const router = require('./router');
const cookieParser = require('cookie-parser')

const client = new MongoClient(process.env.DB_URL);
const PORT = process.env.Port || 4000;
const app = express();
//app.use(express.json);
app.use(cookieParser());
app.use(cors());
app.use('api/', router);
app.get('/meetAppBd', async function (req, res){
    let data = await moove();
    res.json(data);
});

async function start(){
    try {
        await client.connect();
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
