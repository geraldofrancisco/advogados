const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const msg = require('./messages.json')

module.exports = app => {
    
    const signin = async (req, resp) => {
        if (!req.body.email || !req.body.password) return resp.status(400).send(msg.auth.invalidUserAndPassword)

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (!user) return resp.status(404).send(msg.auth.userNotFound)

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return resp.status(401).send(msg.auth.usernameOrPasswordIsInvalid)

        const iat = Math.floor(Date.now() / 1000)

        const exp = iat + (60 * 20)

        const payload = {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                admin: user.admin
            },
            iat,
            exp
        }

        resp.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = async (req, resp) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.decode(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date()) {
                    resp.send(true)
                }
            }
        } catch (e) {

        }

        resp.send(false)
    }

    return {signin, validateToken }
}