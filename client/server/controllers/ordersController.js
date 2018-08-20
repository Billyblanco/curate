module.exports = {
  checkout: (req, res) => {
    let db = req.app.get('db')
    let { user } = req.session
    db.createOrder([user.id]).then( response => {
      res.status(200).send(response)
    })
  }
}