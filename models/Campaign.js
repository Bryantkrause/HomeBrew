module.exports = (model, Schema) => {

    const Campaign = new Schema({
      title: String,
      description: String,
      owner: { type: Schema.Types.ObjectId, ref: 'User' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('Campaign', Campaign)
  }
