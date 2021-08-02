const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        email: {
           type:String,
           required: true,
           unique: true,
           trim: true,
           lowercase: true
        },
        mobile: Number,
        title: {
            type: String,
            enum:['Mr','Mrs', 'Ms'],
            default: 'Mr'

        },
        firstName: {
            type: String,
            min:3
            
        },
        lastName: {
            type: String,
            default: ''
        },
        isActive: {
            type: Boolean,
            default: true
        },
        createdAt: {
            type: Date
        },
        updatedAt: {
            type: Date
        }

        
    }
)


const post = mongoose.model('post', schema);
module.exports = post;