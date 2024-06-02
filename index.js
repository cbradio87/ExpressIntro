const express = require('express');
const quotes = require("inspirational-quotes");
const fetch = require('node-fetch');

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public")); //to use css, img, js

app.get('/',  (req, res) => {
  let randomQuote = quotes.getQuote();
  //console.log(randomQuote);
  res.send(randomQuote.text);
  //res.send(randomQuote.author);
});

app.get('/getQuote', async (req, res) => {
 
  let randomQuote = quotes.getQuote();

  let url = "https://pixabay.com/api?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=inspiration&orientation=vertical";
  let response = await fetch(url);
  let data = await response.json();
console.log(data);
let webImage = data.hits[0].webformatURL;
  //let image = data.hits[0].

  //console.log(randomQuote);
  res.render("quote", {"fullQuote": randomQuote, "image":webImage});
  //res.send(randomQuote.author);
});



app.listen(3000, () => {
  console.log('server started');
});
