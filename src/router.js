const express = require("express");
const weightControllers = require("./controllers/weightControllers");
const levelControllers = require("./controllers/levelControllers");

const router = express.Router();

router.get("/weight", weightControllers.getWeightValue);
router.post("/weightTurnOn", weightControllers.postHandleSensorWeightOn);
router.post("/weightTurnOff", weightControllers.postHandleSensorWeightOff);

router.get("/level", levelControllers.getLevelValue);
router.post("/levelTurnOn", levelControllers.postHandleSensorLevelOn);
router.post("/levelTurnOff", levelControllers.postHandleSensorLevelOff);

module.exports = router;
