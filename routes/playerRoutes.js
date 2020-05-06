const {Player} = require('../models')

module.exports = app => {
    // add a single player
    app.post('/api/player', (req, res) => {
        Player.create(req.body)
            .then(player => {
                res.json(player)
            })
            .catch(e => console.error(e))
    })

    // get a single player
    app.get('/api/player/:id', (req, res) => {
        console.log('hit route for getting a single player')
        Player.findOne({
                _id: req.params.id
            })
            .then(task => res.json(task))
            .catch(e => console.error(e))
    })

    // update a single player
    app.put('/api/player/:id', (req, res) => {
        Player.updateOne({
                _id: req.params.id
            }, {
                $set: req.body
            })
            .then(player => res.json(player))
            .catch(e => console.error(e))
    })

    app.delete('/api/player/:id', (req, res) => {
        Player.deleteOne({
                _id: req.params.id
            })
            .then(player => {
                res.json(player)
            })
            .catch(e => console.error(e))
    })

}