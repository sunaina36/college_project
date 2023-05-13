const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {

await mongoose.connect('mongodb+srv://jaishankar:bDg8Qt7TSHtK152g@cluster0.58q9irm.mongodb.net/?retryWrites=true&w=majority');
  console.log("database connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

