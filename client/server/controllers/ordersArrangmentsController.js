module.exports = {
    get: async (req, res) => {
      let db = req.app.get('db')
      db.getOrdersArrangements().then(response => {
        console.log(response)
        let ordered = response.reduce((currArr, elem) => {
          if (!currArr.length) {
            let order = createOrder(elem)
            currArr.push(order)
            return currArr
          } else {
            let numArrangements = currArr.length
            let count = 0
            currArr.forEach(order => {
              if (order.id === elem.id) {
                let flower = {
                  name: elem.flower_name,
                  imageUrl: elem.flower_image
                }
                order.flowers.push(flower)
              } else {
                count++
              }
            })
            if (count === numArrangements) {
              let order = createOrder(elem)
              currArr.push(order)
              return currArr
            }
            return currArr
          }
        }, [])
        res.send(ordered)
      })
    }
}
function createOrder(elem) {
  let vase = {
    name: elem.vase_name, 
    imageUrl: elem.vase_image
  }
  let flower = {
    name: elem.flower_name,
    imageUrl: elem.flower_image
  }
  let order = {
    id: elem.id,
    vase,
    flowers: [flower]
  }
  return order
}