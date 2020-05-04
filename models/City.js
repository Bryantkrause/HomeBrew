module.exports = (model, Schema) => {

    const Board = new Schema({
      title: String,
      size: String,
      blackSmith: Array,
      tavern: Array,
      GeneralStore: Array,
      Church: Array,
      description: String,
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('Board', Board)
  }