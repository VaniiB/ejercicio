const express = require ('express')
const { crearProducto } = require('../controllers/aunthController');
const routerAuth = express.Router();

routerAuth.post('/crearProducto', crearProducto);
module.exports=routerAuth