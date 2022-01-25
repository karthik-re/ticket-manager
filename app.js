const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require("swagger-ui-express");
const openApiDocumentation = require('./openapi.json');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));


//app.use('/tickets',require('./books/router'));
//app.use('/student',require('./student/router'));

app.get('/',(req,res)=>{
  res.status(200).send(`Welcome!. Please got to <a href="/api-docs">docs</a> to see swagger UI`)
})

module.exports = app;
