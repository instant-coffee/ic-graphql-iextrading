import fetch from "node-fetch";
import { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString } from 'graphql';

fetch(
  'https://api.iextrading.com/1.0/stock/aapl/company'
)
.then(response => response.json())

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  description: '...',

  fields: () => ({
    name : {
      type: GraphQLString
    }
  })
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      company: {
        type: CompanyType,
        // args: {
        //   symbol: {type: GraphQLString}
        // }
      }
    })
  })
});