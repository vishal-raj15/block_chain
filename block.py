import hashlib
import json
import datetime

class block():
    def __init__(self,nonce,trans,tstamp=0,prevhash="0"):
        self.nonce=nonce
        self.tstamp=datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S.%f")
        self.trans=trans
        self.prevhash=prevhash
        self.hash=self.getHash()

    # def time_stamp(self):
    #     date_time = datetime.datetime.now() 
    #     return date_time

    def getHash(self):
        block_string = json.dumps({"nonce":self.nonce , "trans":self.trans, "tstamp":self.tstamp,"prevhash":self.prevhash },sort_keys="true").encode()
        return hashlib.sha256(block_string).hexdigest()

    def __str__(self):
        
        string = "nonce :" + str(self.nonce) + "\n" + "tstamp :" + str(self.tstamp)+"\n"+ "trans :" + str(self.trans)+"\n"+ "prev_hash :" + str(self.prevhash)+"\n"+ "hash :" + str(self.hash)+"\n"

        return string


class block_chain():

    def __init__(self):
        self.chain = [self.genesisblock(),]

    def genesisblock(self):
        return block(0 ,"genesis block ")

    def get_prev_hash(self):
        return self.chain[-1]

    def addblock(self,newblock):
        newblock.prevhash = self.get_prev_hash().hash
        newblock.hash = newblock.getHash()
        self.chain.append(newblock)

bc = block_chain()
n = int(input("no of chains :"))
for i in range(n):
    amount = float(input("enter amount :"))
    bc.addblock((block(i,amount)))
# bc.addblock(block(1,100))
# bc.addblock(block(2,800))
# bc.addblock(block(3,400))


for i in bc.chain:
    print(i)
   