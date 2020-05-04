const { model, Schema } = require('mongoose')

module.exports = {
Campaign: require('./Campaign.js')(model, Schema),
City: require('./City.js')(model, Schema),
Combat: require('./Combat.js')(model, Schema),
Master: require('./Master.js')(model, Schema),
Monster: require('./Monster.js')(model, Schema),
Player: require('./Player.js')(model, Schema),
User: require('./User.js')(model, Schema),
World: require('./World.js')(model, Schema)
}