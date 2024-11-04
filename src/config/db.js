import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log("connect mongodb ", conn.connection.host);
  } catch (error) {
    console.log("connectdb error ", error)
    process.exit()
  }
}

export default connectDB;