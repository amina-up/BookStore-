
const express=require('express');
const cors=require('cors')
const storeRoute=require('./Route/store.Route')
const bookRoute=require('./Route/book.Route')



const app=express();
app.use(express.json());
app.use(cors())

app.use('/api/bookstore',storeRoute)
app.use('/api/bookstore',bookRoute)




app.listen(3000,()=>{
    console.log("Server start....")
})