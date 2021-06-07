const express=require('express')
const router=express.Router();
const ctrStore=require('../controller/store.controller')

router.get("/stores",ctrStore.getStoreList);
router.post("/store/save",ctrStore.saveStore);

module.exports=router