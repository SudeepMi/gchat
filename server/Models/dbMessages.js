import mongoose from 'mongoose'

const appSchema = mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    recieved:Boolean
})

export default mongoose.model("messages",appSchema);