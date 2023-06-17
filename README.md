# getTrashSensorWithMQTT-Backend 💻

This project consists of creating an API using express that gets, handles and makes available data from arduino sensors.

This data is obtained from a cloud (aws IoT) through the MQTT.js library and made available in routes to be consumed by the frontend.

# Enviroment Variables 🚀🔥

- PORT (sensor port)

- AWS_ENDPOINT (aws endpoint)

- AWS_KEY (path of the file containing the aws key)

- AWS_CERTIFICATE (path of the file containing the aws certificate)

- AWS_CA (path of the file that contains the aws root ca)

- TRASH_MAX_LEVEL_CAPACITY (maximum capacity in trash level)

### `npm start` 🚀🔥

Runs the application in the development mode.\
Open [`http://localhost:${process.env.PORT}`](http://localhost:${process.env.PORT}).

### `npm run dev` 🚀🔥

Run the application in development mode using the nodemon module.\
Open [`http://localhost:${process.env.PORT}`](http://localhost:${process.env.PORT}).


