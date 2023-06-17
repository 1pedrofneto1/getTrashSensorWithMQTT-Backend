const mqtt = require("mqtt");
const fs = require("fs");

const connectMqqtClient = () => {
  const client = mqtt.connect(`mqtts://${process.env.AWS_ENDPOINT}:8883`, {
    key: fs.readFileSync(`${process.env.AWS_KEY}`),
    cert: fs.readFileSync(`${process.env.AWS_CERTIFICATE}`),
    ca: [fs.readFileSync(`${process.env.AWS_CA}`)],
    protocolId: "MQTT",
    protocolVersion: 5,
  });

  client.on("error", (err) => {
    throw new Error(`Error connecting to MQTT: ${err}`);
  });

  client.on("disconnect", (err) => {
    throw new Error(`Error connecting to MQTT: ${err}`);
  });

  client.on("offline", (err) => {
    throw new Error(`Error connecting to MQTT: ${err}`);
  });

  return client;
};

module.exports = connectMqqtClient;
