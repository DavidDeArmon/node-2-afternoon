require ('dotenv').config()
const express =  require ('express'),
    {json} = require ('body-parser'),
    massive = require ('massive'),
    app = express(),
    {readP,readPs,updateP,createP,deleteP} = require('./productsCtrl.js')
    port = process.env.PORT||3000;

    app.use(json());

    massive(process.env.CONNECTION_STRING).then(dbInstance=>{
        app.set('db',dbInstance)
        dbInstance.init()
    }).catch(err=>console.log(err))


    app.get('/api/products',readPs)    
    app.get('/api/product/:id',readP)
    app.put('/api/product/:id',updateP)
    app.post('/api/product',createP)
    app.delete('/api/product/:id',deleteP)
    
    

app.listen(port,()=>console.log('server is listening on',port))