// from https://karlmatthes.medium.com/node-authentication-with-express-and-knex-d2d8204537c5
const express = require("express");
const app = express();
app.get("/", (request, response, next) => {
   response. sendStatus(200)
});
app.listen(8080);

const database = require("./database_connection");
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());

// POST route for new users
/* TODO: validate for duplicate usernames */
const bcrypt = require ("bcrypt");
// hash PW with bcrypt 10 times
app.post("/users", (request, response, next) => {
   // console.log(`===ENTERING POST===\nrequest has 'body' key?: ${(Object.keys(request).find(x => x=="body"))}\n\nbody has keys ${Object.keys(request.body)}`);
   // console.log(`===ENTERING POST===\nhandle was ${request.body.username}; raw password ${request.body.password};`);
   bcrypt.hash(request.body.password, 10)
   .then(hashedPassword => {
      return database("user").insert({
         username: request.body.username,
         password_digest: hashedPassword
      })
      .returning(["id", "username"])
      .then(users => {
         response.json(users[0])
      })
      .catch(error => next(error))
   })
})

// DELETE route (development-only)
/*
app.delete("/users/:user_id/", (request, response, next) => {
   console.log("===DELETE by user id ROUTE===");
   console.log(`response locals has keys ${Object.keys(response.locals)}`);
   if(response.locals['user_id']){
      console.log(`locals has id ${response.locals['user_id']}`);
      const { user_id } = request.params;
      database("user").where({id: user_id}).del() // delete({
      //    id: user_id,
      // })
      .then((data) => res.status(200).json({ data }))
      .catch(next);
      // const affectedReservation = response.locals['user_id']['reservation_id'];
      // await reservationsService.updateStatus(affectedReservation, "finished");
      // tablesService
      //   .unseat(user_id)
      //   .then((data) => response.status(200).json({ data }))
      //   .catch(next);
    }
});
*/

// GET route (return all)
app.get("/users", (request, response, next) => {
   database("user")
   .then(users => {
      response.json(users)
   })
});

// POST login route
/* fix SUCCESSFUL login JWT-related error */
const jwt = require("jsonwebtoken")
const SECRET = "any_secret_you_want_to_use"
app.post("/login", (request, response, next) => {
   database("user")
   .where({username: request.body.username})
   .first()
   .then(user => {
      if(!user){
         response.status(401).json({
            error: "No user by that name"
         })
      }else{
         return bcrypt
         .compare(request.body.password, user.password_digest)
         .then(isAuthenticated => {
            if(!isAuthenticated){
               response.status(401).json({
                  error: "Unauthorized Access!"
               })
            }else{
               return jwt.sign(user, SECRET, (error, token) => {
                  response.status(200).json({token})
               })
            }
         })
      }
   })
});

// Verify information from JWT token (GET route)
app.get("/verify", (request, response, next) => {
   const token = request.headers.authorization.split(" ")[1]
   jwt.verify(token, SECRET, (error, decodedToken) => {
      if(error){
         response.status(401).json({
            message: "Unauthorized Access!"
         })
      }else{
         response.status(200).json({
            id: decodedToken.id,
            username: decodedToken.username
         })
      }
   })
});