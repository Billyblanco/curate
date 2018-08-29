const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = {
  
  checkout: async (req, res) => {
     try {
    let db = req.app.get('db')
    console.log('body', req.body)
    stripe.charges.create(req.body)
    let { id } = req.session.user
    let arrangementsData = await db.getArrangements([id])
      
      let arrangements = []
        arrangementsData.forEach( arrangement => {
          let index = arrangements.findIndex(a => { 
            return a.arrangement_id === arrangement.arrangement_id
          })
            if (index !== -1) {
              arrangements[index].flowers.push(arrangement.flower_id)
            } else {
              arr = {
                arrangement_id: arrangement.arrangement_id,
                vase_id: arrangement.vase_id,
                // id: arrangement.user_id,
                flowers: [arrangement.flower_id]
              }
              arrangements.push(arr)
            }
        })
        
        let promises = []
        for ( let i =0; i < arrangements.length; i++) {
          console.log('hhhhhhh',arrangements[i])
          let order = await db.addOrder([id, arrangements[i].vase_id])
                  let orderId = order[0].id

              arrangements[i].flowers.forEach( flower => {
                promises.push(db.addOrderArrangement([orderId, flower]))
             })
          }
            Promise.all(promises).then( () => {
              db.deleteArrangementsOrder([id]).then( () => {
                res.sendStatus(200)
              })
          })
        } catch (error) {
          console.log('ORDER ERROR', error)
        }
     
    } 
    
  }
