const server = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors')
const router = require('./app/routes/routes');
const displayRoutes = require('express-routemap');


server.use(cors())
server.use(bodyParser.json())
server.use(router);

const port = 3000;
server.listen(port, () => {
    console.log(`API running -> Port ${port}`);
    displayRoutes(server);

});

