const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:jyHQ6exAah7Zlm6m@cluster0.yfguo.mongodb.net/tickethack'

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
.then(() => console.log('Database connected'))
.catch(error => console.log.error(error));



