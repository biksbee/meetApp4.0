require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');
const client = new MongoClient(process.env.DB_URL, {
    useUnifiedTopology: true
});

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/users', async function(req, res) {
    let spisok = await addUsr(req.body)
    console.log(req.body)
    res.json(spisok)
});

app.get('/showUsers', async function(req, res){
    let chat = await showAll(req.body)
    console.log(req.body)
    res.json(chat)
});
app.post('/id', async function(req, res){
    let id = await dropId(req.body)
    console.log(req.body)
    res.json(id)
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
//
start();
const dropId = async ({id}) => {
    // await client.db().collection("users");
    // const users = await client.db().collection("users");
    // await users.remove({id});
    console.log(id);
}
const showAll = async () => {
    await client.db().collection("users");
    const users = await client.db().collection("users");
    const spisokUsers =  await users.find().toArray();
    console.log(spisokUsers);
    return spisokUsers;
}
const addx = async () => {
    await client.db().collection("users");
    const users = await client.db().collection("users");
    const user1 = await users.insertOne({"_id": 1, name: "x", age: 21});
}
const addUsr = async ({name,email, nick, password}) => {
    return await client.db().collection("users").insertOne({
        Name: name,
        Email: email,
        Nick: nick,
        Password: password
    })
}