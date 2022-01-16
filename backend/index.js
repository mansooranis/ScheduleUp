const { MongoClient } = require("mongodb");
const express = require('express');
const app = express();
const allcombinations = require('allcombinations');

const client = new MongoClient("mongodb://localhost:27017", { useNewUrlParser: true });
app.use(express.json());

app.get('/alldata', (req, res) => {
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

function combinate(obj) {
  let combos = [];
  const startTime = [];
  for (var key in obj) {
    const values = obj[key];
    const all = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < (combos.length || 1); j++) {
            startTime.push(values[i].startTime);
            if(startTime.indexOf(values[i].startTime) === startTime.lastIndexOf(values[i].startTime)) {
                continue;
            }
            else{
            const newCombo = Object.assign(Object.assign({}, combos[j]), {
            [key]: values[i],
            });
            all.push(newCombo);
        }
      }
    }
    combos = all;
  }
  return combos;
}

app.post("/getCourseData", (req, res) => {
    const  courses  = req.body.courses;
    let timetable = [];
    let classData = [];
    client.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        const collection = client.db("ByteCrunchers").collection("classes");
        for(let i = 0; i < courses.length; i++) {
            collection.find({ courseName: courses[i] }).toArray(function (err, docs) {
                if (err) {
                    console.log(err);
                    return;
                }
                classData.push(docs[0].Lectures);
                if(i === courses.length - 1) {
                    res.send(combinate(classData));
                    client.close();
                }
            });
        }
    });
});

app.listen(3000, () => console.log('App listening on port 3000!'))