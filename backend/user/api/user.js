const bcrypt = require('bcrypt-nodejs')
const messages = require('./messages.json')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encriptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, resp) => {

        const user = { ...req.body }
        if (req.params.id) user.id = req.params.id

        try {
            existsOrError(user.name, messages.errors.name)
            existsOrError(user.email, messages.errors.email)
            existsOrError(user.password, messages.errors.password)
            existsOrError(user.confirmPassword, messages.errors.confirmPassword)
            equalsOrError(user.password, user.confirmPassword, messages.errors.passwordsDoNotMatch)

            const userDb = await app.db('users')
                .where({ email: user.email }).first()
            if (!user.id)
                notExistsOrError(userDb, messages.errors.alreadyRegistered)

        } catch (msg) {
            resp.status(400).send(msg)
        }

        user.password = encriptPassword(user.password)
        delete user.confirmPassword

        if (user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => resp.status(204).send())
                .catch(err => resp.status(500).send(err))
        }
    }

    const get = (req, resp) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .then(users => resp.json(users))
            .catch(err => resp.status(500).send(err))
    }

    const passport = (req, resp) => {
        app.db('users')
            .select('id')
            .where({ id: req.params.id })
            .then(user => resp.json(user))
            .catch(err => resp.status(500).send(err))
    }

    return { save, get, passport }
}