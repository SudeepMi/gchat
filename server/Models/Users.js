import mongoose from 'mongoose'

const appUsersSchema = mongoose.Schema({
   uid:String,
   displayName:String,
   photoUrl:String,
   email:String,
   phone:String,
   idToken:Object,
//    UserName:String
})

export default mongoose.model("users",appUsersSchema);