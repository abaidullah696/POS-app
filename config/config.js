const mongoose = require("mongoose");
require("colors");

// Connect to MongoDB

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected  ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`.red.bold);
    process.exit(1);
  }
};

//export

module.exports = connectDb;
