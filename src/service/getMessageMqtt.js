const getMessageMqtt = (attributeName, client) => {
  return new Promise((resolve, reject) => {
    client.on("message", (_, message) => {
      if (message != 0 && !message) {
        reject(
          new Error(
            `Erro ao pegar o valor do ${
              attributeName === "weight" ? "peso" : "nível"
            }`
          )
        );
      }

      const attribute = parseFloat(message);

      resolve(attribute);
    });
  });
};

module.exports = getMessageMqtt;
