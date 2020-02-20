const blockchain = require('./blockchain');
const Block = require('./block');
var express = require("express");
var request = require("request");
var app = express();
request({
    url:"https://blockchain.info/stats?format=json",
    json:true

}, function(error , response , body){
     btc = body.market_price_usd;
});

app.get("/" , function(req ,res){
    res.send(btc);
});

app.listen(3000,function(body){
    console.log("basterd");
});



// let m = new blockchain();
// for(i=1 ; i<= 2 ; i++){
//     m.addBlock(new Block(i,{amount : 100*i},new Date().toJSON()));
// }
// console.log(JSON.stringify(m,null ,4));