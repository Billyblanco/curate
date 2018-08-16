module.exports = {
  getArrangementsFlowers: async (req, res) => {
    let db = req.app.get('db')
    db.getArrangementsFlowers().then(response => {
      let organizedArrangements = response.reduce((currArr, elem) => {
        if (!currArr.length) {
          let arrangement = createArrangement(elem)
          currArr.push(arrangement)
          return currArr
        } else {
          let numArrangements = currArr.length
          let count = 0
          currArr.forEach(arrangement => {
            if (arrangement.id === elem.id) {
              let flower = {
                name: elem.flower_name,
                imageUrl: elem.flower_image
              }
              arrangement.flowers.push(flower)
            } else {
              count++
            }
          })
          if (count === numArrangements) {
            let arrangement = createArrangement(elem)
            currArr.push(arrangement)
            return currArr
          }
          return currArr
        }
      }, [])
      res.send(organizedArrangements)
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
  },
  deleteArrangement: (req, res) => {
    const { id } =req.params
    let selectedArrangement = arrangements_flowers.find( arrangement => arrangement.id === id)
      if (selectedArrangement){
        arrangements_flowers.splice(index, 1)
      }
  }
}

function createArrangement(elem) {
  let vase = {
    name: elem.vase_name, 
    imageUrl: elem.vase_image
  }
  let flower = {
    name: elem.flower_name,
    imageUrl: elem.flower_image
  }
  let arrangement = {
    id: elem.id,
    vase,
    flowers: [flower]
  }
  return arrangement
}