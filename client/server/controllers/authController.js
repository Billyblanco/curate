const axios = require('axios')
module.exports = {
  auth: async (req, res) => {
    try {
      let { code } = req.query
      let payload = {
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
      }
      let auth0domain = `https://${process.env.REACT_APP_AUTH0_DOMAIN}`

      let accessTokenResponse = await axios.post(`${auth0domain}/oauth/token`, payload)
      let accessToken = accessTokenResponse.data.access_token

      let userInfoResponse = await axios.get(`${auth0domain}/userinfo?access_token=${accessToken}`)
      let userInfo = userInfoResponse.data

          let db = req.app.get('db')
          let users = await db.findUserByAuthId(userInfo.sub)

          if (users.length) {
            req.session.user = users[0]
            console.log(req.session.user)
            res.redirect('/#/dashboard')
          } else {
            let users = await db.createUsers(userInfo)
            req.session.user = users[0]
            console.log(req.session.user)
            res.redirect('/#/dashboard')
          }
          
      } catch (error) {
          console.log("WE HAVE A PROBLEM", error)
          res.redirect('/error')
      }
    }
} 

  