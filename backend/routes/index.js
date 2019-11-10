const app = require('express')()
const consign = require('consign')
const axios = require('axios')

app.axios = axios

consign()
    .then('./global.js')
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log("backend routes executando ...")
})