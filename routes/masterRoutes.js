const {Player, Master} = require('../models')

module.exports = app => {
    // add a single master
    app.post('/api/master', (req, res) => {
        Master.create(req.body)
            .then(master => {
                res.json(master)
            })
            .catch(e => console.error(e))
    })

    // get a single master
    app.get('/api/master/:id', (req, res) => {
        console.log('hit route for getting a single master')
        Master.findOne({
                _id: req.params.id
            })
            .then(task => res.json(task))
            .catch(e => console.error(e))
    })

    // get all the masters
    app.get('/api/master', (req, res) => {
        console.log('hit route for getting a single master')
        Master.findOne()
            .then(task => res.json(task))
            .catch(e => console.error(e))
    })

    // update a single master
    app.put('/api/master/:id', (req, res) => {
        Master.updateOne({
                _id: req.params.id
            }, {
                $set: req.body
            })
            .then(master => res.json(master))
            .catch(e => console.error(e))
    })

    app.delete('/api/master/:id', (req, res) => {
        Master.deleteOne({
                _id: req.params.id
            })
            .then(master => {
                res.json(master)
            })
            .catch(e => console.error(e))
    })

}