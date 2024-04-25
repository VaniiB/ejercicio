const { Schema, model } = require('mongoose');

const CrearProductoSchema = Schema({
	name: {
		type: String,
		required: true,
        unique: true,
	},

	descripcion: {
		type: String,
		required: true,
		
	},

	precio: {
		type: Number,
		required: true,
	},

	cantidad: {
		type: Number,
        required:true,
	},
});

module.exports = model('Producto', CrearProductoSchema);
