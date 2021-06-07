const pool=require("./pool")



exports.dbquery=(test,values)=>{

    return new Promise((resolve,reject)=>{
        pool.query(test,values)
        .then(res=>{
        resolve(res);
        })
        .catch(err=>{
        reject(err)
        })
    });

}