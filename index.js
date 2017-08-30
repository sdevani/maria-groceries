const express = require('express');
const app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.set('view engine', 'pug');

var myAddItems = []; // change variable name

app.get('/', function(req, res) {
  // If we're using pug, we should use it everywhere
  res.sendFile('/Users/shehzan/code/devani/index.html')
});

app.get('/my_javascript.js', function(req, res) {
//   TODO(shehzan): Show Maria how to serve static content
  res.sendFile('/Users/shehzan/code/devani/my_javascript.js')
});


app.get('/item/new', function(req, res) {
  res.render('add_item');
});


app.post('/add_item', function(req, res) {
  var name = req.body.itemName;
  var cost = req.body.itemCost;
  var inventory = req.body.inventoryAmount;
  var item = {name:name, cost:cost, inventory:inventory};
  myAddItems.push(item);
  console.log("These are my items");
  console.log(myAddItems);
  res.redirect("/");
});



app.get('/buy_item.html', function(req, res) {
  res.render('buy_item',{myItems: myAddItems});
  res.redirect('/checkout');
});



app.get('/Checkout.html', function(req, res) {
  var myText = req.query.mytext; 
  res.sendFile('/Users/shehzan/code/devani/checkout.html')
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});




