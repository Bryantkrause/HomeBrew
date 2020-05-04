module.exports = (model, Schema) => {

    const Combat = new Schema({
      initiative: Array,
      round: Number,
      damage: Number,
      description: String,
      monster: [{ type: Schema.Types.ObjectId, ref: 'monster' }],
      player: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('Combat', Combat)
  }