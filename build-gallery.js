// Setup Mongo Client
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

// Import source data for insert
const gallery = require('./fixtures/gallery');

// Setup server credentials securely
const uri = process.env.MONGODB_URL;

// Connect to MongoDB Atlas
// Notice that most of the code is inside a callback
MongoClient.connect(uri,{ useUnifiedTopology: true,useNewUrlParser: true },  function(err, client) {
   if(err) {
      console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');

   // Choose our database
   const db = client.db("glossary");

   // Target our collection
   const imgCol = db.collection('images');

   // Drop the current collection, if there is any. The purpose of this script is to reset a test database to its default state.
   imgCol.drop();
   console.log('Dropped');

   // Create a fresh collection using the custom module data
   imgCol.insertMany(gallery, function(err, cursor) {
    if (err) {
      console.log('There was a problem');
    }
    console.log(cursor.insertedCount);
  });

});