module.exports = (model, Schema) => {

    const Monster = new Schema({
      Name: String,
      Alignment: String,
      Senses: Object,
      Stats: Object,
      AC: Number,
      Speed: Number,
      HP: Number,
      Challenge: Number,
      XP: Number,
      Abilities: Array,
      Languages: Array,
      Description: String,
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('Monster', Monster)
  }