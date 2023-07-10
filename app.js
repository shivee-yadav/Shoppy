const express = require('express');
const mongoose=require('mongoose');
require('dotenv').config();

const userRoutes=require('./routes/user');

const app= express();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser:true,
    family: 4
}).then(() => console.log('DB Connected'));


//middleware
app.use('/api',userRoutes);

const port = process.env.PORT || 8000

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});