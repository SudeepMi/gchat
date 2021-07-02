import mongoose from 'mongoose'

const appSchema = mongoose.Schema({
    threadId:String,
    message:String,
    sender:String,
    timestamp:String,
    status:Boolean,
    isFile:Boolean
})

export default mongoose.model("messages",appSchema);