
const express = require('express');
const {Client} = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });
const routes = require('./routes');


const app =  express();
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static('/public'));

//send files
const htmlPath = '/public/index.html';

app.get('/',(req,res)=>{
    res.sendFile(htmlPath);
})


const port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`Connected at Port ${port}`));
