module.exports = {
  get: (req, res) => {
    let db = req.app.get('db')
    db.getVases().then(response => {
      res.send(response)
    })//add catch 
  }
}