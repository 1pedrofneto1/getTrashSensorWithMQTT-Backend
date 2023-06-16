const express = require("express");
const tasksControllers = require("./controllers/tasksControllers");

const router = express.Router();

router.get("/weight", tasksControllers.getWeightValue);
router.get("/level", tasksControllers.getLevelValue);
router.post("/weightTurnOn", tasksControllers.postHandleSensorWeightOn);
router.post("/levelTurnOn", tasksControllers.postHandleSensorLevelOn);
router.post("/weightTurnOff", tasksControllers.postHandleSensorWeightOff);
router.post("/levelTurnOff", tasksControllers.postHandleSensorLevelOff);

module.exports = router;
