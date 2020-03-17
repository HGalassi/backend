const express = require('express');
const mongoose  = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// mongoose.connect('mongodb+srv://root:mestre@instarocket-ho5cq.mongodb.net/week10?retryWrites=true&w=majority' , {
//     useNewUrlParser : true ,
//     useUnifiedTopology : true,
// })

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.urlencoded());

app.listen(3333);


app.post('/users', (request,response) =>{
    console.log(request.body);
     return response.json({ message : 'Hello Mundo'});
});
