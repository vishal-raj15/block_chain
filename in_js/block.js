
const SHA256 = require('crypto-js/sha256');

class Block{

    constructor(index  , data , timestamp,previousHash="" ){

        this.index = index;
        this.data = data;
        this.timestamp = timestamp;
        this.previousHash = this.previousHash;

        this.hash = this.getHash();

    }

    getHash(){
        return SHA256(JSON.stringify(this.data) + this.index + this.timestamp + this.previousHash ).toString();
    }
}
module.exports = Block;