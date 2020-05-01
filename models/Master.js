module.exports = (model, Schema) => {

    const Master = new Schema({
      name: String,
      description: String,
      player: { type: Schema.Types.ObjectId, ref: 'Player' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('Master', Master)
  }