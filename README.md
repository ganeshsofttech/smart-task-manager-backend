moreganesh327_db_user
pdCjHRtBVJ8bqtBZ
mongodb+srv://moreganesh327_db_user:<db_password>@cluster0.qbvvxuv.mongodb.net/?appName=Cluster0


dbuser
db@123
mongodb+srv://<db_username>:<db_password>@cluster0.qbvvxuv.mongodb.net/?appName=Cluster0

===================================================
API Calling
===================================================
http://localhost:3000/api/users - POST
{
  "name":"Ganesh",
  "email":"Ganesh@gmail.com",
  "department":"IT"
}
====================================================
http://localhost:3000/api/tasks -POST
{
  "title": "Complete Node.js Assignment",
  "description": "Build a Task Management API using Express and MongoDB.",
  "status": "Pending",
  "assignedTo": "6a4e0eff1b300173f757b1a6"
}
===============================================================

http://localhost:3000/api/users/6a4e1429715eb4b8345168d1 -GET

http://localhost:3000/api/users?id=6a4e1429715eb4b8345168d1

==================================================================