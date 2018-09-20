module.exports={

//read all products
readPs(req,res){
    let db = req.app.get('db');
    db.readProducts().then(products=>{
        return res.status(200).send(products)
    }).catch(err=>{
        res.status(500).json({errorMessage:'something went wrong'})
        console.log(err)})
},
//read one product
readP(req,res){
    const{id} = req.params
    let db = req.app.get('db');
    db.readProduct([req.params.id]).then(product=>{
        return res.status(200).send(product)
    }).catch(err=>{
        res.status(500).json({errorMessage:'something went wrong'})
        console.log(err)})
},
//update
updateP(req,res){
    const{id} = req.params,
        {desc} = req.query
    let db = req.app.get('db');
    db.updateProduct([desc,id]).then(()=>{
        return res.sendStatus(200)
    }).catch(err=>{
        res.status(500).json({errorMessage:'something went wrong'})
        console.log(err)})
},
//add a product to list
createP(req,res){
    const {name,description,price,imageurl} = req.body
    let db = req.app.get('db');
    db.createProduct([name,description,price,imageurl]).then(()=>{
        return res.sendStatus(200)
    }).catch(err=>{
        res.status(500).json({errorMessage:'something went wrong'})
        console.log(err)})
},
//delete product by id
deleteP(req,res){
    const{id} = req.params
    let db = req.app.get('db');
    db.deleteProduct([req.params.id]).then(()=>res.sendStatus(200)).catch(err=>{
        res.status(500).json({errorMessage:'something went wrong'})
        console.log(err)})
}


}