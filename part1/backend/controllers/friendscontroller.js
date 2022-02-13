const Friend = require("../models/friends_model");
const createError = require("http-errors");

//add new task
const addNewFriend = async (req, res, next) => {
  const newFriend = new Friend(req.body);

  //const { error } = newFriend.joiValidation(req.body);

//   if (error) {
//     return res.status(400).json({
//       result: false,
//       message: error,
//     });
//   } else {
    try {
      const result = await newFriend.save();
      if (result) {
        return res.status(201).json({
          result: true,
          message: "New Friend saved.",
        });
      } else {
        return res.status(400).json({
          result: false,
          message: "Something went wrong while saving task.",
        });
      }
    } catch (e) {
      next(createError(e));
    }
  }
// };

//update task
const updateFriend = async (req, res, next) => {
  try {
    const friend = await Friend.findById(req.body.id, {}, { lean: true });
    if (friend) {
      const willBeUpdated = await Friend.findByIdAndUpdate(
        { _id: req.body.id },
        req.body,
        { lean: true, new: true }
      );
      if (willBeUpdated) {
        return res.status(201).json({
          result: true,
          message: "Task updated.",
        });
      } else {
        return res.status(400).json({
          result: true,
          message: "Something went wrong while updating task.",
        });
      }
    } else {
      return res.status(404).json({
        result: false,
        message: "No record found.",
      });
    }
  } 
  catch (error) {
    next(createError(error));
  }
};

//delete task
const deleteFriend = async (req, res, next) => {
  try {
    const friend = await Friend.findByIdAndDelete({ _id: req.body.id });
    if (friend) {
      return res.status(201).json({
        result: true,
        message: "Friend deleted.",
      });
    } else {
      return res.status(400).json({
        result: false,
        message: "Something went wrong while deleting task.",
      });
    }
  } 
  catch (error) {
    next(createError(error));
  }
};

//get all data
const getAllFriends = async (req, res, next) => {
  try {
    const allData = await Friend.find({}, {}, { lean: true });
    return res.status(200).json(allData);
  }
  catch (error) {
    next(createError(error));
  }
};
module.exports = {
  addNewFriend,
  updateFriend,
  deleteFriend,
  getAllFriends,
};