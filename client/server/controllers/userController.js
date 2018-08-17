module.exports = {
  updateEmail: (req, res) => {
    console.log('RRRRRR', req.body)
    let { id } = req.session.user
    let { newEmail } = req.body
    // console.log(req.body)
    let db = req.app.get('db')
    db.updateEmail([id, newEmail]).then(response => {
      res.status(200).send(response)
    }).catch( err => {
      console.log('UPDATE EMAIL ERROR', err)
      res.status(500)
    })
  }
}