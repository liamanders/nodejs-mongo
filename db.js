import mongoose from "mongoose";

const connectDB = async (req, res) => {
  const uri = "mongodb://localhost:27017/users";
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB");
    process.exit(1);
  }
};

const userSchema = new mongoose.Schema({
  UserId: {
    type: String,
    require: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);

export default {
  connectDB,
  User,
};
