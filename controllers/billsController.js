const billsModel = require("../models/billsModel");

//add items

const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Bill Created Successfully");
  } catch (error) {
    res.send("Something went wrong");
  }
};

module.exports = {
  addBillsController,
};
