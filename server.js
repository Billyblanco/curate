const express = require('express')
    , session = require('express-session')
    , massive = require('massive')
    , bodyParser = require('body-parser')
    require('dotenv').config()

    const app = express()

    const PORT = 4007
    app.listen(PORT, () => {
      console.log("HELLLLO", PORT)
    })