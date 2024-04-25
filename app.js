const express = require ("express");
const app = express();
require('dotenv').config();
const cors = require('cors');
const dbConnection = require("./database/config");

app.use('/admin', require('./router/authRouth'));


app.use(express.json());

app.use(cors());

dbConnection();

app.listen(process.env.PORT, () => {
	console.log(`ejecutandose en el puerto ${process.env.PORT}`);
});

