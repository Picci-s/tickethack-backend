const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:Nnx3dCrj2WwrRQr7@cluster0.tigiy.mongodb.net/tickethack'

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
.then(() => console.log('Database connected'))
.catch(error => console.log.error(error));



