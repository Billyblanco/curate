const nodemailer = require('nodemailer')

module.exports = {
  user: process.env.REACT_APP_EMAIL_ADDRESS,
  password: process.env.REACT_APP_PASSWORD
}

module.exports = {
  send: (req, res) => {
    let transport = {
      host: 'smtp.gmail.com',
      auth: {
        user: creds.USER,
        pass: creds.PASS
      }
    }
    
    var transporter = nodemailer.createTransport(transport)
    let { name, email, message } = req.body
    let content = `name: ${name} \n email: ${email} \n message: ${content}`

    const mail = {
      from: name, 
      to: process.env.REACT_APP_EMAIL_ADDRESS,
      subject: 'New Message from Curate',
      text: content
    }

  }
}