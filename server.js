const express = require('express');
const graphqlHTTP = require('express-graphql');
// const cors = require('cors');
const schema = require('./schema');

// allow cross orign
// app.subscribe(cors())

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



