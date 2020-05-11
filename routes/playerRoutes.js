const {Player, Master} = require('../models')

module.exports = app => {
    // add a single player
    app.post('/api/player', (req, res) => {
        Player.create(req.body)
            .then(player => {
                if(req.body.master){
                    Master.updateOne({ master: req.body.master }, { $push: { player: user._id } })
                        .then(user => res.json(user))
                        .catch(e => console.log(e))
                }
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

    // get all the players
    app.get('/api/player', (req, res) => {
        console.log('hit route for getting a single player')
        Player.find()
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