const Block = require('./block');

class blockchain{
    constructor(){
        this.chain=[this.genesisBlock()];
        this.difficulty = 4;
    }

    genesisBlock(){
        const genesisdate = '27/12/19';
        return new Block(0,'genesis block' , genesisdate,"0");
    }

    getpreviousBlock(){
        return this.chain[this.chain.length - 1];

    }

    addBlock(newBlock){
        newBlock.previousHash = this.getpreviousBlock().hash;
        newBlock.mineblock(this.difficulty);
        // newBlock.hash =newBlock.getHash();
        this.chain.push(newBlock);

    }

    check(){
        for( let i=1;i<this.chain.length ;i++){
            const currBlock = this.chain[i];
            const prevBlock = this.chain[i-1];

        if(currBlock.previousHash !== prevBlock.hash){
            return false;
        }
        if(currBlock.hash !== currBlock.getHash())
        {
            return false;
        }
    }

        return true;
        
    }
}

let blocknos = 5;

// let mychain = new blockchain();
// for(i=1 ; i<= blocknos ; i++){
//     mychain.addBlock(new Block(i,{amount : 100*i},new Date().toJSON()));
// }

// console.log(mychain.check());

// console.log(JSON.stringify(mychain,null ,4));
// any  free api adress + "?format=json"  -> gives a json format of the data in the site
module.exports = blockchain;