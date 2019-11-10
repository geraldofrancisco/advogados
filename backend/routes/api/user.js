module.exports = app => {
    const  url = `${app.global.userUrl}/users`

    const save = async (req, resp) => {
        console.log("user save")
    }

    const get = (req, resp) => {
        
        console.log(url)
        app.axios.get(url)
            .then(response => {
                resp.send(response.data)
            })
            .catch(error => {
                resp.status(500).send(error)
            })

    }

    return { save, get }
}