var mongoose = require("mongoose");
Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password:{
        type:String,
        required:true
    }
});
UserSchema.methods.comparePassword = function(password){
    return password === this.password;
}
var userModel = mongoose.model('User', UserSchema);

module.exports = {
  userModel: userModel}