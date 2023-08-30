const mongoose = require('mongoose')

const userModel = new mongoose.Schema(
    {
        name: {
            type: String
        },
        secretIdentity: {
            type: String
        },
        age: {
            type: Number
        },
        strenghtLevel: {
            type: Number
        }

    }
)

const User = mongoose.model('users', userModel);

module.exports = User