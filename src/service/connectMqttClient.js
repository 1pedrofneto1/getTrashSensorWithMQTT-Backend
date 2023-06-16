const mqtt = require("mqtt");
const fs = require("fs");

const connectMqqtClient = () => {
  const client = mqtt.connect(
    "mqtts://" + `${process.env.ENDPOINT}` + ":8883",
    {
      key: fs.readFileSync(`${process.env.KEY}`),
      cert: fs.readFileSync(`${process.env.CERTIFICATE}`),
      ca: [fs.readFileSync(`${process.env.CA}`)],
      protocolId: "MQTT",
      protocolVersion: 5,
    }
  );

  client.on("error" || "disconnect" || "offline", (err) => {
    new Error(`Error connecting to MQTT: ${err}`);
  });

  return client;
};

module.exports = connectMqqtClient;
