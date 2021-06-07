const queries= require('../db/queries')
const connectdb=require('../db/connexion')
const util=require("../util/utility")

exports.getBookList=async(req,res)=>{
   
    try{
        let bookquery=queries.queryList.GET_BOOK_QUERY;
      let result = await  connectdb.dbquery(bookquery)
        return res.status(200)
        .send(JSON.stringify(result.rows))
    }catch(err){
console.log("error:"+err)
return res.status(500)
.send({err:'failes to list the books'})
    }
};

exports.getBookDetails=async(req,res)=>{
   
    try{
        let bookId=req.params.bookId;
        let bookquery=queries.queryList.GET_BOOK_DETAILS_QUERY;
      let result = await  connectdb.dbquery(bookquery,[bookId])
        return res.status(200)
        .send(JSON.stringify(result.rows[0]))
    }catch(err){
console.log("error:"+err)
return res.status(500)
.send({err:'failes to list the books'})
    }
};

exports.saveBook=async(req,res)=>{

    try {
        let createdBy="Admin";
        let createdOn=new Date();
        //req.body
        let title=req.body.title;
        let description=req.body.description;
        let author=req.body.author;
        let publisher=req.body.publisher
        let pages=req.body.pages
    

        
        let storeCode=req.body.storeCode;
    
        
     values=[title,description,author,publisher,pages,storeCode,createdOn,createdBy]
    
    let saveBookQuery=queries.queryList.SAVE_BOOK_QUERY;
    await connectdb.dbquery(saveBookQuery,values);
    
    return res.status(201).send("successful book saved ! :)")
    
    } catch(err){
        console.log(err)
        return res.status(500).send({err:'failes to save a book the store'})
    }
    
      
           
        };

exports.updateBook=async(req,res)=>{

            try {
                let createdBy="Admin";
                let createdOn=new Date();
                //req.body
                let bookId=req.body.bookId
                let title=req.body.title;
                let description=req.body.description;
                let author=req.body.author;
                let publisher=req.body.publisher
                let pages=req.body.pages
                let storeCode=req.body.storeCode;
            
                
             values=[title,description,author,publisher,pages,storeCode,createdOn,createdBy,bookId]
            
            let updateBookQuery=queries.queryList.UPDATE_BOOK_QUERY;
            await connectdb.dbquery(updateBookQuery,values);
            
            return res.status(201).send("successful book updated ! :)")
            
            } catch(err){
                console.log(err)
                return res.status(500).send({err:'failes to save a book the store'})
            }
            
              
                   
                };
    
exports.deleteBook=async(req,res)=>{
try{
    let bookId=req.params.bookId;
    if(!bookId){
       return res.status(500).send({error:"can not delete empty bookId"});

}
let deleteBookQuery=queries.queryList.DELETE_BOOK_QUERY
await connectdb.dbquery(deleteBookQuery,[bookId])
return res.status(200).send("successfully deleted")
}

catch(err){
    console.log(err)
    return res.status(500).send({err:'failes to save a book the store'+bookId})
}
}

    

      
           
        