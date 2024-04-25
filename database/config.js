const mongoose = require('mongoose');

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.BASEDATA);
		console.log('db conectado');
	} catch (error) {
		console.log(error);
	}
};

module.exports = dbConnection;
