const { db } = require('@vercel/postgres');
var { graphql, buildSchema } = require("graphql")

var schema = buildSchema(`
    type Query {
        hello: String
    }
`)
