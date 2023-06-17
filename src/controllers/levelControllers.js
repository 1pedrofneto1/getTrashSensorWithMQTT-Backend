const connectMqqtClient = require("../service/connectMqttClient");
const getMessageMqtt = require("../service/getMessageMqtt");
const subscribeTopicMqtt = require("../service/subscribeTopicMqtt");
const handleSensor = require("../service/handleSensor");

const getLevelValue = async (_, res) => {
  const client = connectMqqtClient();

  subscribeTopicMqtt("HC-SR04/data", "level", client);

  const remainingLevel = await getMessageMqtt("level", client);

  return res
    .status(200)
    .json({ usedLevel: process.env.TRASH_MAX_LEVEL_CAPACITY - remainingLevel });
};

const postHandleSensorLevelOn = async (_, res) => {
  const client = connectMqqtClient();

  handleSensor(client, "HC-SR04/commands", "on");

  return res.status(204);
};

const postHandleSensorLevelOff = async (_, res) => {
  const client = connectMqqtClient();

  handleSensor(client, "HC-SR04/commands", "off");

  return res.status(204);
};

module.exports = {
  getLevelValue,
  postHandleSensorLevelOn,
  postHandleSensorLevelOff,
};
