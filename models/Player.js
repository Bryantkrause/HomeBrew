module.exports = (model, Schema) => {

    const Player = new Schema({
      name: String,
      class: Array,
      background: String,
      race: String,
      alignment: String,
      stats: Object,
      skills: Object,
      AC: Number,
      speed: Number,
      HP: Number,
      XP: Number,
      proficiency: Number,
      abilities: Object,
      languages: Array,
      description: String,
      owner: { type: Schema.Types.ObjectId, ref: 'User' },
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('Player', Player)
  }