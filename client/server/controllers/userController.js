module.exports = {
  updateEmail: (req, res) => {
    let { id } = req.session.user
    let { email } = req.body
    // console.log('hhehhehehe', email)
    let db = req.app.get('db')
    db.updateEmail([id, email]).then(response => {
      res.status(200).send(response)
    }).catch( err => {
      console.log('UPDATE EMAIL ERROR', err)
      res.status(500)
    })
  },
  updateUsername: (req, res) => {
    let { id } = req.session.user
    let {username }= req.body
    let db = req.app.get('db')
    console.log('username', username)
    db.updateUsername([id, username]).then(response => {
      // console.log('RESPO', response.data)
      res.status(200).send(response)
    }).catch( err => {
      console.log('UPDATE USERNAME ERROR', err)
      res.status(500)
    })
  },
  updatePassword: (req, res) => {
    let { id } = req.session.user
    let {password} = req.body
    let db = req.app.get('db')
    console.log('password', password)

    db.updatePassword([id, password]).then(response => {
      res.status(200).send(response)
    }).catch( err => {
      console.log('UPDATE PASSWORD ERROR', err)
      res.status(500)
    })
  }
}