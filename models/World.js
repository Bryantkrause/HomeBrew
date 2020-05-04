module.exports = (model, Schema) => {

    const World = new Schema({
      title: String,
      description: String,
      owner: { type: Schema.Types.ObjectId, ref: 'User' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('World', World)
  }