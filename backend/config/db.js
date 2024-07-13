// Connection to database
import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vinaybhupelli1:52dFlEqNkTKtOKG0@mern.cdhbzh1.mongodb.net/Tomato"
    )
    .then(() => console.log("Connected to database"));
};
