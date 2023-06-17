const handleSensor = (client, topic, message) => {
  client.on("connect", () => {
    client.publish(topic, message);
  });

  client.on("error", (err) => {
    throw new Error(
      `Erro ao ${message === "on" ? "Ligar" : "Desligar"} sensor de ${
        topic === "HX711/commands" ? "peso" : "nível"
      }: ${err}`
    );
  });
};

module.exports = handleSensor;
