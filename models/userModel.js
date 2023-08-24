const mongoose = require('mongoose')

const userModel = new mongoose.Schema(
    {
        name: {
            type: String
        }
    }
)

const User = mongoose.model('users', userModel);

module.exports = User