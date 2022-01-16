# ScheduleUp - ByteCrunchers

![schedule_up](https://user-images.githubusercontent.com/93630550/149675772-6a9caac7-ca47-47f6-a72f-665bc8c1c3a9.gif)


## Inspiration
Choosing the correct university courses is an important component of achieving success in life. Only the ability to take those classes at one's own speed and leisure is more significant. We built Schedule-Up as a convenience to confront improbable last-minute course adjustments due to unavailability, uncertainty, and schedule conflicts.

## What it does
Schedule-Up allows users (in this case, University of Alberta students) to enter their classes for any forthcoming semester, and the website will produce all possible combinations of classes into various timetables (schedules). Students can use this to create numerous schedules as there will be a range of timetables to select from, and the website can be scaled to any university with a large number of courses.

## How we built it
We divided our application into 2 parts: front-end and back-end. the front end is made using react. It is hosted
on the google cloud platform and the domain is hosted on domain.com. For the back-end, we used node.js, express, and
node-MongoDB drivers to serve the JSON API request to the front-end

## Challenges we ran into
The first obstacle we faced was connecting the MongoDB database to node.js, and then there was a huge problem on the backend with validating all combinations of all the courses with multiple lecture schedules. To address this problem, we developed our own combination algorithm that accepts course and lecture data in JSON format from the MongoDB database and creates combinations based on all of the courses' lectures. In the front end, managing many component states was a difficult challenge too.

## Accomplishments that we're proud of
We're proud of our scheduling system, which accounts for all potential combinations while ensuring that none of the courses run concurrently. Not only that, but not every member of our group had worked in a react or node.js environment before, and we all improved and learnt how to utilise node.js and  react

## What we learned
We learned how to make the most out of everyone's strengths and weaknesses to successfully realize the project. As it was our first doing web development, some of us learned how to incorporate React in an efficient manner, while others learned how to create a complex web interface for users to interact with. We are proud that we could produce such a project while realizing how important it is to never stop learning.

## What's next for ScheduleUp?
We intend to containerize the backend on docker so that it can be quickly expanded utilising DevOps on Google Cloud Platform, and we're always working on adding more courses and lecture times from different universities.
