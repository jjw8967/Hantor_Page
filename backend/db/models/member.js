const { mongoose, autoIncrement } = require('../mongo')

const memberSchema = mongoose.Schema({
    num: {type: Number, unique: true},
    name: {type:String, required: true},
    stdID : {type:String, required: true, unique:true},
    birthday : {type:String, require: true,},
    phoneNum : {type:String, required: true},
    major : {type:String, required: true},
    
});

memberSchema.plugin(autoIncrement, {
    model: 'member',
    field: 'num',
    startAt: 1
})

module.exports = mongoose.model("member", memberSchema);