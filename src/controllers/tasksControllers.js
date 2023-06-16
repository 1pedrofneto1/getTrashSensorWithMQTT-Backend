const connectMqqtClient = require("../service/connectMqttClient");
const getMessageMqtt = require("../service/getMessageMqtt");
const subscribeTopicMqtt = require("../service/subscribeTopicMqtt");
const handleSensor = require("../service/handleSensor");

const getWeightValue = async (_, res) => {
  const client = connectMqqtClient();

  subscribeTopicMqtt("HX711/data", "weight", client);

  const data = await getMessageMqtt("weight", client);

  return res.status(200).json({ weight: data });
};

const getLevelValue = async (_, res) => {
  const client = connectMqqtClient();

  subscribeTopicMqtt("HC-SR04/data", "level", client);

  const data = await getMessageMqtt("level", client);

  return res.status(200).json({ level: 27 - data });
};

const postHandleSensorWeightOn = async (_, res) => {
  const client = connectMqqtClient();

  handleSensor(client, "HX711/commands", "on");

  return res
    .status(200)
    .json({ response: "Weight sensor activated successfully!" });
};

const postHandleSensorWeightOff = async (_, res) => {
  const client = connectMqqtClient();

  handleSensor(client, "HX711/commands", "off");

  return res
    .status(200)
    .json({ response: "Weight sensor successfully deactivated" });
};

const postHandleSensorLevelOn = async (_, res) => {
  const client = connectMqqtClient();

  handleSensor(client, "HC-SR04/commands", "on");

  return res
    .status(200)
    .json({ response: "Level sensor activated successfully!" });
};

const postHandleSensorLevelOff = async (_, res) => {
  const client = connectMqqtClient();

  handleSensor(client, "HC-SR04/commands", "off");

  return res
    .status(200)
    .json({ response: "Level sensor successfully deactivated" });
};

module.exports = {
  getLevelValue,
  getWeightValue,
  postHandleSensorWeightOn,
  postHandleSensorWeightOff,
  postHandleSensorLevelOn,
  postHandleSensorLevelOff,
};
