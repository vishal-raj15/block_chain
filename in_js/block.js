
const SHA256 = require('crypto-js/sha256');

class Block{

    constructor(index  , data , timestamp,previousHash="" ){

        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.previousHash = this.previousHash;
        this.nonce = 0;
        this.hash = this.getHash();

    }

    getHash(){
        return SHA256(JSON.stringify(this.data) + this.index + this.timestamp + this.nonce+ this.previousHash ).toString();
    }

    mineblock(difficulty){
        while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join(0)){
            this.nonce++;
            this.hash = this.getHash();
        }

    }
}
module.exports = Block;