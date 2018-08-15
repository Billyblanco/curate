module.exports = {
  getFlowers: (req, res) => {
    let db = req.app.get('db')
    db.getFlowers().then(response => {
      // console.log(response)
      res.send(response)
    })//add catch
  },
  getVases: (req, res) => {
    let db = req.app.get('db')
    db.getVases().then(response => {
      res.send(response)
    })//add catch 
  },
  getDecor: (req, res) => {
    let db = req.app.get('db')
    db.getDecor().then(response => {
      res.send(response)
    }) // add catch 
  }

}