var randomstring = require("randomstring");


exports.generateStoreCode=()=>{
    return randomstring.generate({
        length:5 ,
        charset: 'alphabetic'
        
      });

}