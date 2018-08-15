require('dotenv').config()
const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    , authController = require('./controllers/authController')
    , flowerController = require('./controllers/productController')
    , vasesController = require('./controllers/productController')
    , decorController = require('./controllers/productController')
    , arrangementsController= require('./controllers/arrangementsController')
    

    
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

//Auth0
app.get('/auth/callback', authController.auth)
app.get('/api/currentUser', (req, res) => {
  res.send(req.session.user)
})
app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
})

// Get Products from DB
app.get('/api/flowers', flowerController.getFlowers)
app.get('/api/vases', vasesController.getVases)
app.get('/api/decor', decorController.getDecor)

// Create Arrangements and Get arrangements from DB
app.get('/api/arrangements/flowers', arrangementsController.getArrangementsFlowers)
app.post('/api/arrangements', arrangementsController.createArrangement)




const PORT = 4007
app.listen(PORT, () => {
  console.log("COME ON AND SLAM *_*", PORT)
})