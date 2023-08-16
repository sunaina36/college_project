const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {

  await mongoose.connect('mongodb+srv://jai:VocEC5VZ4PgdNN8r@cluster0.kqhxi14.mongodb.net/?retryWrites=true&w=majority');
  console.log("database connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

