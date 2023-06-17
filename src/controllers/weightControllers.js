const connectMqqtClient = require("../service/connectMqttClient");
const getMessageMqtt = require("../service/getMessageMqtt");
const subscribeTopicMqtt = require("../service/subscribeTopicMqtt");
const handleSensor = require("../service/handleSensor");

const getWeightValue = async (_, res) => {
  const client = connectMqqtClient();

  subscribeTopicMqtt("HX711/data", "weight", client);

  const currentWeight = await getMessageMqtt("weight", client);

  return res.status(200).json({ currentWeight });
};

const postHandleSensorWeightOn = async (_, res) => {
  const client = connectMqqtClient();

  handleSensor(client, "HX711/commands", "on");

  return res.status(204);
};

const postHandleSensorWeightOff = async (_, res) => {
  const client = connectMqqtClient();

  handleSensor(client, "HX711/commands", "off");

  return res.status(204);
};

module.exports = {
  getWeightValue,
  postHandleSensorWeightOn,
  postHandleSensorWeightOff,
};
