module.exports = (model, Schema) => {

    const Master = new Schema({
      name: String,
      description: String,
      player: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
      // Campaign: [{ type: Schema.Types.ObjectId, ref: 'Campaign' }],
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('Master', Master)
  }