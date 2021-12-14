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
// app.get('/meetAppBd', async function (req, res){
//     let data = await moove();
//     res.json(data);
// });
//
app.post('/meetAppBd', async function(req, res) {
    console.log("1");
    let spisok = await addUsr(req.body)
    console.log(req.body)
    res.json(spisok)
});
app.post('/meetAppBd', async function(req, res) {
    console.log("2");
    let check = await checkUsr(req.h)
    console.log(req.h);
    res.json(check)
    console.log("\n\n"+ check +"\n\n")
})
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
start();
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
const checkUsr = async ({nick, password}) => {
    const usr = await client.db().collection("users").findOne({
        Nick: nick,
        Password: password
    });
    let result = (usr === {}) ? true : false;
    return result;
}

