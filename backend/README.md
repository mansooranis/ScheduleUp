# Backend
This is the backend for Schedule Up. Same files are also hosted Google App Engine that are accessible through the link
``` txt
https://bytecrunchers.uw.r.appspot.com/
```
[CLICK ME - INDEX PAGE](https://bytecrunchers.uw.r.appspot.com/)

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install npm.

```bash
npm start
```

## Routes
These are all the endpoints that the frontend access from the API to get all the data

```txt
    1. /alldata - Methods: [GET]
Returns all the courses with their respective available lecture timings in the MONGODB Database
```
USAGE: [/alldata](https://bytecrunchers.uw.r.appspot.com/alldata)
```txt
    2. /getCourseData - Methods: [POST]
React from the frontend send a Post Request of format

    {
        "courses": [list of user entered courses]
    }

Sends all the possible timetable combinations in the form of json that is used by the React frontend to display it to the user 
```

## Tech/framework used
<b>Built with</b>
- [Node.js](https://nodejs.org/en/)
- [Express]()

## Credits
Made by
- Armaan Katyal
- Akarshan Mishra