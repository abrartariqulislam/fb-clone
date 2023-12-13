const mongoose = require("mongoose")

const Schema = mongoose.Schema({
    first_name:{
        type:String,
        required:[true, "First name is required!"],
        trim:true,
    },
    last_name:{
        type:String,
        required:[true, "Last name is required!"],
        trim:true,
    },
    user_name:{
        type:String,
        required:[true, "User name is required!"],
        unique: true,
        trim:true,
    },
    email:{
        type:String,
        required:[true, "Email name is required!"],
        trim:true,
    },
    password:{
        type:String,
        required:[true, "Password name is required!"],
        trim:true,
    },
    picture:{
        type:String,
        trim:true,
        default:"",
    },
    cover:{
        type:String,
        trim:true,
    },
    gender:{
        type:String,
        required:[true, "Gender is required!"],
        trim:true,
        enum:["male","female","other"]
    },
    birth_year:{
        type: Number,
        required:[true, "Birth year is required!"],
    },
    birth_month:{
        type: Number,
        required:[true, "Birth month is required!"],
    },
    birth_day:{
        type: Number,
        required:[true, "Birth day is required!"],
    },
    verified:{
        type:Boolean,
        default: false,
    }
})