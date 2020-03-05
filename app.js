const path = require('path');
const express = require('express');
const definitions = require('./definitions.js');

const app = express();
app.set('view engine','ejs');

app.get('/api/v1/definitions', function(request, response){
  response.json(definitions);
})
app.get('/definitions/:slug', function(request,response){
  let definition = definitions.filter(function(item){
    return request.params.slug == item.slug;
  });
  response.render('definition',definition[0]);
});

app.get('/',function(request,response) {
  response.render('index',{});
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
