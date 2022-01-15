const { MongoClient } = require("mongodb");
const express = require('express');
const app = express();

const client = new MongoClient("mongodb://localhost:27017", { useNewUrlParser: true });

app.get('/', (req, res) => {
    client.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        const collection = client.db("ByteCrunchers").collection("classes");
        collection.find({}).toArray(function (err, docs) {
            if (err) {
                console.log(err);
                return;
                }
                res.send(docs);
                client.close();
            });
        });
    });

app.listen(3000, () => console.log('App listening on port 3000!'))