const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer} = require('apollo-server-express');
const dotenv = require('dotenv');
const typeDefs = require('./Essentials/typedef');
const resolvers = require('./Essentials/Resolvers'); 

dotenv.config();

const port = process.env.PORT;


//connection the Database -----------------------------------------

const DB = process.env.DB;

mongoose.connect(DB , {
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify:true,
    useCreateIndex: true
}, ()=>
{
    console.log("Database is connected successfully");

})


//---------------------------------------------------------------------------


//Server Function ------------------------------------------------------------

const startserver = async () =>
{
    const app = express();
    const apolloserver = new ApolloServer({
        typeDefs,
        resolvers
    })


    await apolloserver.start();
    apolloserver.applyMiddleware({app: app})
    app.listen(port, ()=>
    {
        console.log(`server up and running on port ${port}`)
    })
}
startserver();

//------------------------------------------------------------------