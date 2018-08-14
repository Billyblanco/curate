module.exports = {
  get: (req, res) => {
    let db = req.app.get('db')
    db.getFlowers().then(response => {
      console.log(response)
      res.send(response)
    })
  }
}