// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Replace the following URL with your own MongoDB connection string.
    const uri = 'mongodb+srv://omraj:OKcse%4014@cluster0.mongodb.net/bajaj?retryWrites=true&w=majority';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
