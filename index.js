const express = require('express');
const server = express();
const { PORT } = require('./config');
const { HomeRoutes, QoutesRoutes } = require('./routes');
const { NotFoundMiddleware } = require('./middleware')

server.use(express.static('./public'));
server.use(express.json());

server.use('/', HomeRoutes);
server.use('/', QoutesRoutes);
server.use(NotFoundMiddleware)

server.listen(PORT, () => {
  console.log(`aplication runing in PORT ${PORT}`);
});
