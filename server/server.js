//imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const Authroute = require('./routes/auth.js');
const Orderroute = require('./routes/orders.js');

//app config
const app = express();

const port =  process.env.PORT || 9000;





//DB Config
const connection_url  = 'YOUR Mongo DB URL Here';
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
})

db.once('open',() => {
    console.log('Connection With Database Established');
})


//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//api routes
app.get('/',(req,res) => res.status(200).send("Hello world"))
app.use('/api/auth',Authroute);
app.use('/api/order',Orderroute);


//listen
app.listen(port,() => console.log(`Listening on localhost: ${port}`));
