
const express=require('express');
const cors=require('cors')
const storeRoute=require('./Route/storeRoute')


const app=express();
app.use(express.json());
app.use(cors())

app.use('/api/bookstore',storeRoute)




app.listen(3000,()=>{
    console.log("Server start....")
})