module.exports = (model, Schema) => {

    const Board = new Schema({
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
      owner: { type: Schema.Types.ObjectId, ref: 'User' },
      table: [{ type: Schema.Types.ObjectId, ref: 'Table' }],
      company: [{ type: Schema.Types.ObjectId, ref: 'Company' }],
      members: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    }, { timestamps: { createdAt: 'birthday', updatedAt: 'lastUpdated' }})
    return model('Board', Board)
  }