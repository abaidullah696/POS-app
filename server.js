const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const cors = require("cors");
const dotanv = require("dotenv");
require("colors");
const connectDb = require("./config/config");
//dotenv config
dotanv.config();

//connect to db
connectDb();
//rest objects
const app = express();

//middlewares

// app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//routes

app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//port
const PORT = process.env.PORT || 8080;

//listen

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.green.bold); //green text and bold
});
