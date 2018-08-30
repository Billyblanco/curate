//BrowserRouter
const path = require('path')
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
    , userController = require('./controllers/userController')
    , ordersController = require('./controllers/ordersController')
    

  
const app = express()

app.use(bodyParser.json())
 

app.use( express.static( `${__dirname}/../build` ) )

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true,
  resave: false
}))

massive(process.env.CONNECTION_STRING).then( db => {
  app.set('db', db)
  console.log('DATABASE CONNECTED!')
})

app.use('/s3', require('react-s3-uploader/s3router')({
  bucket: process.env.REACT_APP_SOME_BUCKET,
  region: 'us-west-1', //optional
  // signatureVersion: 'v4', //optional (use for some amazon regions: frankfurt and others)
  // headers: {'Access-Control-Allow-Origin': '*'}, // optional
  ACL: 'private', // this is default
  uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
}))

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

// Arrangements DB
app.get('/api/arrangements/flowers', arrangementsController.getArrangementsFlowers)
app.post('/api/arrangements', arrangementsController.createArrangement)
app.delete('/api/arrangements/flowers/:id', arrangementsController.deleteArrangement)

// Edit Email 
app.put('/api/currentUser/email', userController.updateEmail)
app.put('/api/currentUser/username', userController.updateUsername)
app.put('/api/currentUser/password', userController.updatePassword)
// Orders 
app.post('/api/checkout', ordersController.checkout)

app.delete('/api/arrangements/:id')

//BrowserRouter
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const PORT = 4007
app.listen(PORT, () => {
  console.log("COME ON AND SLAM *_*", PORT)
})