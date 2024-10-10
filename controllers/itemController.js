const itemModel = require("../models/itemModel");
//get items
const getItemController = async (req, res) => {
  try {
    const items = await itemModel.find();
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
  }
};

//add items

const addItemController = async (req, res) => {
  try {
    const newItem = new itemModel(req.body);
    await newItem.save();
    res.status(201).send("Item Created Successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error occurred while adding the item",
      error: error.message, // Return the error message in the response
    });
  }
};

module.exports = { getItemController, addItemController };
