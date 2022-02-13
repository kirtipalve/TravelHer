
const friendRouter = require("express").Router();
const friendController = require("../controllers/friendscontroller");


friendRouter.post("/addNewFriend", friendController.addNewFriend);

friendRouter.post("/updateFriend", friendController.updateFriend);

friendRouter.post("/deleteFriend", friendController.deleteFriend);

friendRouter.get("/getAllFriends", friendController.getAllFriends);

module.exports = friendRouter;