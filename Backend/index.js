// 1. Create a Server
import express from "express";
import databaseConnection from "./Utils/database.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRoute from "./Route/userRoute.js";
import cors from "cors";

//to keep the port num private
dotenv.config({
  path: ".env",
});

const app = express(); // so that uh can add all the functionalities of express
const PORT = 8080;

// Required Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true, // or use '*' to allow all origins
    credentials: true,
  })
);

//listens a port num and a cllbck
app.listen(PORT, () => {
  console.log(` Server Listen at Port ${PORT}`);
});

databaseConnection();

//createing API   http:localhost:8080/api/v1/user/register
app.use("/api/v1/user", userRoute);

// axios.defaults.validateStatus = () => true;
// axios
//   .post("https://www.themoviedb.org/documentation/api", data)
//   .then((response) => {
//     console.log("Response Sent To DB");
//   })
//   .catch((error) => {
//     // handle error
//     console.log("Response NOT Sent To DB, Theres some error");
//   });
