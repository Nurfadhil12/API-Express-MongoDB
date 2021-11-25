require('./config/mongoose');
const express = require('express');
const path = require('path');
const app = express();
// const productrouter = require('./app/product/routes');
// const productrouterV2 = require('./app/product_v2/routes');
const productrouterV3 = require('./app/product_v3/routes');
const productrouterV4 = require('./app/product_v4/routes');
const logger = require('morgan')


app.use(logger('dev'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/public',express.static(path.join(__dirname,'uploads')));
// app.use('/api/v1', productrouter);
// app.use('/api/v2', productrouterV2);
app.use('/api/v3', productrouterV3);
app.use('/api/v4', productrouterV4);
app.use (( req, res, next)=>{
    res.status(404);
    res.send({
        status:'Failed',
        message:'resource'+ req.originalUrl+ ' Not found'
    })
})
app.listen(4000, () => console.log('Server: http://localhost:4000'));