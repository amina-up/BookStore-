const express=require('express')
const router=express.Router();
const ctrBook=require('../controller/bookController')

router.get("/books",ctrBook.getBookList);
router.get("/book/details/:bookId",ctrBook.getBookDetails)
router.post("/book/save",ctrBook.saveBook);
router.delete("/book/delete/:bookId",ctrBook.deleteBook);
router.put("/book/update",ctrBook.updateBook)

module.exports=router