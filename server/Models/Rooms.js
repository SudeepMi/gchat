import mongoose from 'mongoose'

const appSchema = mongoose.Schema({
    user_1:String,
    user_2:String,
    roomName: String,
})

export default mongoose.model("messages",appSchema);