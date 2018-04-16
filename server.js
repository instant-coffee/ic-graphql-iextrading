import express from "express";

const app = express()
const PORT = 4001

app.get('/', function(req, res) {
  res.send('sup yo!');
});

app.listen(PORT, () => console.log(`App listening on ${PORT}!`))
