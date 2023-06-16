const getMessageMqtt = (attributeName, client) => {
  return new Promise((resolve, reject) => {
    client.on("message", (_, message) => {
      const attribute = parseFloat(message);
      if (attribute === null || undefined) {
        reject(new Error(`Error getting value from ${attributeName}`));
      } else {
        resolve(attribute);
      }
    });
  });
};

module.exports = getMessageMqtt;
