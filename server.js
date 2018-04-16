import express from "express";
import graphqlHTTP from "express-graphql";

const app = express()
const PORT = 4001

app.use('/graphql', graphqlHTTP({
  graphiql: true
}))

app.get('/', function(req, res) {
  res.send('sup yo!');
});

app.listen(PORT, () => console.log(`App listening on ${PORT}!`))
