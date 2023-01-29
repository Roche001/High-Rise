const mongoose = require('mongoose');

// connect to the mongoDB
const connectDB = async () =>{
  try {
    mongoose.set('strictQuery', false);
   mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('Connected successfully to the database')
  } catch (error) {
    console.log(`Error ${error.message}`)
    process.exit(1);
  }
}

module.exports = connectDB;