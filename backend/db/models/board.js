const { mongoose, autoIncrement } = require('../mongo')

const commentSchema = mongoose.Schema({
    cmtContent: {type: String, required: true},
    author: {type: String},
    date: {type: Date, default: Date.now},
    postType: {type: String}, //true: Board, false: Notice
    circleName: {type: String}
});

const boardSchema = mongoose.Schema({
    num: {type: Number, unique: true},
    title: {type: String, required: true},
    contents: {type: String, required: true},
    author: {type: String, required: true},
    date: {type: Date, default: Date.now},
    type: {type: String}, //true: Board, false: Notice
    comment: [commentSchema]
    //postViews: {type: Number}
});

boardSchema.plugin(autoIncrement, {
    model: 'board',
    field: 'num',
    startAt: 1
})

module.exports = mongoose.model("board", boardSchema);