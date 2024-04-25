const Producto = require("../model/producto-model");


const crearProducto = async (req, res) => {
	//*const { name, descripcion, precio, cantidad } = req.body;
console.log(req.body)
    if (!name || !descripcion || !precio || !cantidad) {
		return res.status(400).json({
			msg: 'Todos los campos son obligatorios',
		});
	}

    
	try {
	

		//en el caso que no exista el producto, creamos una instancia
		const producto = new Producto(req.body);

		
		//guardamos en la base de datos
		await producto.save();

		res.status(201).json({
			msg: 'Producto agregado',
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Por favor contacterse con un administracion',
		});
	}
};


module.exports = {
	crearProducto,
};
