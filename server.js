const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');

// define app
const app = express();

// allow cross orign
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



