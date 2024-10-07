const mongoose = require("mongoose");
const dotanv = require("dotenv");
const connectDb = require("./config/config");
const itemModel = require("./models/itemModel");
const items = require("./utils/data");

//config
dotanv.config();
connectDb();

//function seeder
const importData = async () => {
  try {
    await itemModel.deleteMany();
    const itemData = await itemModel.insertMany(items);
    console.log("All items added".bgGreen);
  } catch (error) {
    console.log(`${error}`.bgRed.inverse);
    process.exit(1);
  }
};
importData();
