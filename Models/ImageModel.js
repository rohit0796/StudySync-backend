const mongoose = require ('mongoose')

const ImageSchema = mongoose.Schema(
    {
        name:{
            type:String
        },

    }
)

module.exports = Imagemodel = mongoose.model('imageModel',ImageSchema) 