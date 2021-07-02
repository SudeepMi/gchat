import mongoose from 'mongoose'

const RoomsappSchema = mongoose.Schema({
    user1:String,
    user2:String,
    consent:Object,
    roomName: String,
    CreatedOn:Date,
})

export default mongoose.model("rooms",RoomsappSchema);