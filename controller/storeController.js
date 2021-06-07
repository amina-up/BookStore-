const queries= require('../db/queries')
const connectdb=require('../db/connexion')
const util=require("../util/utility")
exports.getStoreList=async(req,res)=>{
   
    try{
        let storequery=queries.queryList.GET_STORE_LIST_QUERY;
      let result = await  connectdb.dbquery(storequery)
        return res.status(200)
        .send(JSON.stringify(result.rows))
    }catch(err){
console.log("error:"+err)
return res.status(500)
.send({err:'failes to list the store'})
    }
};


    exports.saveStore=async(req,res)=>{

try {
    
    let createdOn=new Date();
    //req.body
    let storeName=req.body.storeName;
    let address=req.body.address;
    let createdBy=req.body.createdBy;
 
 let storeCode=util.generateStoreCode();


 values=[storeName,storeCode,createdOn,createdBy,address]

let savestoreQuery=queries.queryList.SAVE_STORE_QUERY;
await connectdb.dbquery(savestoreQuery,values);

return res.status(201).send("successful store saved ! :)")

} catch(err){
    console.log(err)
    return res.status(500).send({err:'failes to save a store the store'})
}

  
       
    };
