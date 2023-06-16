const subscribeTopicMqtt = (topic, topicName, client) => {
  client.on("connect", () => {
    client.subscribe(topic, (err) => {
      if (!err) {
        console.log(`Connected to ${topicName} topic!`);
      } else {
        new Error(`Error connecting to ${topicName} topic: ${err}`);
      }
    });
  });
};

module.exports = subscribeTopicMqtt;
