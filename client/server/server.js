const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , authController = require('./controllers/authController')
    require('dotenv').config()

const app = express()
app.use(bodyParser.json())
  
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false
}))

massive(process.env.CONNECTION_STRING).then( db => {
  app.set('db', db)
  console.log('DATABASE CONNECTED!')
})

app.get('/auth/callback', authController.auth)
app.get('/api/currentUser', (req, res) => {
  res.send(req.session.user)
})

app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
})

const PORT = 4007
app.listen(PORT, () => {
  console.log("COME ON AND SLAM *_*", PORT)
})