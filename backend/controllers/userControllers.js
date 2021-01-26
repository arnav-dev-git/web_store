import asyncHandler from "express-async-handler";
import generateTokens from "../utils/generateTokens.js";
import User from "../models/userModel.js";

//* @Desc: authenticate the user and get the token
//! @route GET /api/users/login
//& @access public

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateTokens(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password !");
  }
});
