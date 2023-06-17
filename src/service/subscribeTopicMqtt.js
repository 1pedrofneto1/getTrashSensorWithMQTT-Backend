const subscribeTopicMqtt = (topic, topicName, client) => {
  client.on("connect", () => {
    client.subscribe(topic, (err) => {
      if (!err) {
        console.log(
          `Conectado ao tópico de ${topicName === "level" ? "nível" : "peso"}`
        );
      } else {
        throw new Error(
          `Erro ao conectar ao tópico de ${
            topicName === "level" ? "nível" : "peso"
          }: ${err}`
        );
      }
    });
  });
};

module.exports = subscribeTopicMqtt;
