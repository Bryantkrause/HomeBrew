module.exports = app => {
    require('./campaignRoutes.js')(app)
    require('./cityRoutes.js')(app)
    require('./combatRoutes.js')(app)
    require('./masterRoutes.js')(app)
    require('./monsterRoutes.js')(app)
    require('./playerRoutes.js')(app)
    require('./userRoutes.js')(app)
    require('./worldRoutes.js')(app)
  }
  