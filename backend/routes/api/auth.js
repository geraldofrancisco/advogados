const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const msg = require('./messages.json')

module.exports = app => {
    
    const signin = async (req, resp) => {
        
    }

    const validateToken = async (req, resp) => {
        
    }

    return {signin, validateToken }
}