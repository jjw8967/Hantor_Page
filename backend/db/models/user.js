const { mongoose, autoIncrement } = require('../mongo')

const userSchema = mongoose.Schema({
    num: {type: Number, unique: true},
    email: {type: String, required: true,unique: true},
    pw: {type: String, required: true},
    admin : {type: Boolean, default: false},
    //postViews: {type: Number}
});

userSchema.plugin(autoIncrement, {
    model: 'user',
    field: 'num',
    startAt: 1
})

module.exports = mongoose.model("user", userSchema);