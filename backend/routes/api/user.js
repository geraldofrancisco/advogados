module.exports = app => {
    const  url = `${app.global.userUrl}/users`

    const save = async (req, resp) => {
        console.log("user save")
    }

    const get = (req, resp) => {
        
        let params = {
            headers: {
                Authorization: req.headers.authorization,
                'Content-Type': 'application/json'
            }
        }

        app.axios.get(url, params)
            .then(response => {
                resp.send(response.data)
            })
            .catch(error => {
                resp.status(500).send(error)
            })

    }

    return { save, get }
}