module.exports = {
  getArrangementsFlowers: async (req, res) => {
    let db = req.app.get('db')
    db.getArrangementsFlowers().then(response => {
      // let serializesResponse = response.reduce((current, elem) => {
      //   current.forEach(arrangement => {
      //     if (elem.arrangement_id === arrangement.arrangement_id) {
      //       arrangement.flower_ids.push(elem.flower_id)
      //     }
      //   })
      // }, [])
      res.send(response)
    })
  },
  createArrangement: async (req, res) => {
    let db = req.app.set('db')
    let { vaseId, flowerIds } = req.body
    
    let newArrangements = await db.createArrangement([vaseId])
    let newArrangement = newArrangements[0]

    let arrangementsFlowerResponse = await Promise.all(flowerIds.map( async flowerId => {
      let newArrangementsFlowers = await db.createArrangementFlowers([newArrangement.id, flowerId])
      let newArrangementsFlower = newArrangementsFlowers[0]
        return newArrangementsFlower
    }))

    let arrangement = {
      ...newArrangement,
      flowers: arrangementsFlowerResponse.map( arrResponse => {
        return arrResponse.flower_id
        // console.log(arrangement)
      })
    }
    res.send(arrangement)
  }
}