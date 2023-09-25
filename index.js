const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3004;

app.use(morgan('combined'));

app.get('/home',(req,res)=>{
    return res.json({message:'Ok'});
});
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
});