const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://xserrat:gYaYDeq4UjFSxThc@cluster0.jmsl7.mongodb.net/tickethack'

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
.then(() => console.log('Database connected'))
.catch(error => console.log.error(error));



