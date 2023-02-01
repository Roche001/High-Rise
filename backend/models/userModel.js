const {Schema, model} = require('mongoose');

// declare user schema
const UserSchema = Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilePic: {
    type: String,
    required: true
  }
}, { timestamps: true});

const User = model('User', UserSchema);

export default User;