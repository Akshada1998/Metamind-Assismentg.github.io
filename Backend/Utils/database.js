import mongoose from "mongoose";

const databaseConnection = () => {
  const MONGO_URI =
    "mongodb+srv://akshada4829:Akshada11@cluster0.cdrcik7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("mongodb connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default databaseConnection;
