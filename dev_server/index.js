require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb+srv://jenya:jeka51230@cluster0.qfhya.mongodb.net/meetAppBd?retryWrites=true&w=majority', {
    useUnifiedTopology: true
});
const PORT = 4000;
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(bodyParser.json());
// app.get('/meetAppBd', async function (req, res){
//     let data = await moove();
//     res.json(data);
// });

app.post('/meetAppBd', async function(req, res) {
    let spisok = await addUsr(req.body)
    let data = req.body
    console.log(req.body)
    res.json(spisok)
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

// const moove = async () => {
//     await client.db().collection("users");
//     const users = await client.db().collection("users");
//     const spisokUsers =  await users.find().toArray();
//     return spisokUsers;
// }

const addUsr = async ({name,email, nick, password}) => {
    return await client.db().collection("users").insertOne({
        Name: name,
        Email: email,
        Nick: nick,
        Password: password
    })
}
start();

