module.exports = (model, Schema) => {

    const User = new Schema({
      name: String,
      description: String,
      player: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      campaign: [{ type: Schema.Types.ObjectId, ref: 'campaign' }],
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('User', User)
  }