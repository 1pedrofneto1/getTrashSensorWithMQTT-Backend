const handleSensor = (client, topic, message) => {
  client.on("connect", () => {
    client.publish(topic, message);
  });

  client.on("error", (err) => {
    new Error(`Error sending message to MQTT: ${err}`);
  });
};

module.exports = handleSensor;
