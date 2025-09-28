import mongoose from "mongoose"; // allows us to connect our Node.js app to the MongoDB server
// adds features like schemas, validation, and middleware that MongoDB alone doesn’t have.

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDb is connected....");
  } catch (error) {
    console.log("mongoDb is not connected....");
    process.exit(1); //  website ke jitne bhi db connection ke code hai wo nahi chalenege.
  }
};

export default connectDB;
