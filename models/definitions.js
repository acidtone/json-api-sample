const mongoose = require('mongoose');

// Step 1: Define our Schema
// See: https://mongoosejs.com/docs/guide.html
/*
"Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection."
*/
const definitionSchema = new mongoose.Schema(
  {
    term: {
      type: String,
      required: true
    },
    definition: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true,
    }
  }
);

// Compile and export our model using the above Schema.
// See: https://mongoosejs.com/docs/models.html 

module.exports = mongoose.model('Definition', definitionSchema);;
// Important: The first argument of mongoose.model() is the singular name of the collection your model is for. 
// ** Mongoose automatically looks for the plural, lowercased version of your model name. **"
// In our example, we name our model 'Definition' and mongoose will automatically look for the collection 'definitions' 