const { MongoClient } = require("mongodb");
const express = require('express');
const app = express();

// creating a new connection client to the database
const client = new MongoClient("mongodb://localhost:27017", { useNewUrlParser: true });
// using middleware to parse the body of the request
app.use(express.json());

// This sends data of all the courses to the frontend
app.get('/alldata', (req, res) => {
    // create a connection
    client.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        // create a connection to the collection
        const collection = client.db("ByteCrunchers").collection("classes");
        // find all the data in the collection
        collection.find({}).toArray(function (err, docs) {
            if (err) {
                console.log(err);
                return;
                }
                // send the data to the frontend
                res.send(docs);
                // close the connection
                client.close();
            });
        });
    });

// make all the combinations of the courses
function combinate(obj) {
    // array to store all the combinations
  let combos = [];
  // array to store all the startTimes
  const startTime = [];
  for (var key in obj) {
    const values = obj[key];
    const all = [];
    for (let i = 0; i < values.length; i++) {
        // adding the startTime to the array
        startTime.push(values[i].startTime);
        for (let j = 0; j < (combos.length || 1); j++) {
            // if the startTime of previous course is same as the new course startTime then skip the case
            if(startTime.indexOf(values[i].startTime) !== startTime.lastIndexOf(values[i].startTime)) {
                continue;
            }
            else{
                // Making a new array to store the combination of the courses
            const newCombo = Object.assign(Object.assign({}, combos[j]), {
            [key]: values[i],
            });
            // pushing the new combination to the array
            all.push(newCombo);
        }
      }
    }
    // updating the array with the new combinations
    combos = all;
  }
  // returning the array of all the combinations
  return combos;
}

// this sends the combinations of the courses to the frontend
app.post("/getCourseData", (req, res) => {
    // get a the coursesList from the frontend
    const  courses  = req.body.courses;
    // array to store all the data retrieved from the database
    let classData = [];
    client.connect(function (err) {
        if (err) {
            console.log(err);
            return;
        }
        // create a connection to the collection
        const collection = client.db("ByteCrunchers").collection("classes");
        for(let i = 0; i < courses.length; i++) {
            // find the data on the basis of the courseName and store it in the array
            collection.find({ courseName: courses[i] }).toArray(function (err, docs) {
                if (err) {
                    console.log(err);
                    return;
                }
                // push the lecture data to the array
                classData.push(docs[0].Lectures);
                if(i === courses.length - 1) {
                    // call the function to make all the combinations of the courses and send the data to the frontend
                    res.send(combinate(classData));
                    // close the connection
                    client.close();
                }
            });
        }
    });
});
// listen to the port
app.listen(3000, () => console.log('App listening on port 3000!'))