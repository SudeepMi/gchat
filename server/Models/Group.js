import mongoose from 'mongoose'

const GroupappSchema = mongoose.Schema({
    roomName: String,
    members:Array,
    CreatedOn:Date,
})

export default mongoose.model("Groups",GroupappSchema);