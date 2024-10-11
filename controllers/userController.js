const userModel = require("../models/userModel");
//login user
const loginController = async (req, res) => {
  try {
    const { userId, password } = req.body;
    const user = await userModel.findOne({ userId, password, verified: true });
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(401).send("Invalid userId or password");
    }
  } catch (error) {
    console.log(error);
  }
};

//register user

const registerController = async (req, res) => {
  try {
    const newUser = new userModel({ ...req.body, verified: true });
    await newUser.save();
    res.status(201).send("New User Added Successfully");
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error occurred while adding new user",
      error: error.message, // Return the error message in the response
    });
  }
};

module.exports = {
  loginController,
  registerController,
};
