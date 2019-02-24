const { mongoose, autoIncrement } = require('../mongo')

const boardSchema = mongoose.Schema({
    num: {type: Number, unique: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    date: {type: Date, default: Date.now},
    //postViews: {type: Number}
});

boardSchema.plugin(autoIncrement, {
    model: 'board',
    field: 'num',
    startAt: 1
})

module.exports = mongoose.model("board", boardSchema);