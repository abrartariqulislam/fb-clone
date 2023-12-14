const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required!"],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, "Last name is required!"],
      trim: true,
    },
    user_name: {
      type: String,
      required: [true, "User name is required!"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email name is required!"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password name is required!"],
      trim: true,
    },
    picture: {
      type: String,
      trim: true,
      default: "",
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Gender is required!"],
      trim: true,
      enum: ["male", "female", "other"],
    },
    birth_year: {
      type: Number,
      required: [true, "Birth year is required!"],
      trim: true,
    },
    birth_month: {
      type: Number,
      required: [true, "Birth month is required!"],
      trim: true,
    },
    birth_day: {
      type: Number,
      required: [true, "Birth day is required!"],
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    requests: {
      type: Array,
      default: [],
    },
    posts: {
      type: Array,
      default: [],
    },
    search: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
      },
    ],
    details: {
      bio: String,
      other_name: String,
      job: String,
      workspace: String,
      highschool: String,
      college: String,
      current_city: String,
      home_town: String,
      relationship: {
        type: String,
        enum: ["Single", "In a relationship", "Married", "Divorced"],
      },
      instagram: String,
    },
    saved_post: [
      {
        post: {
          type: mongoose.Schema.ObjectId,
          ref: "Post",
        },
        save_at: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
