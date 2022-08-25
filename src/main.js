const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

/*
    * After generating a key, the first private and public keys were:
    * Private key: c1e2da0b90ead000248889c6637d9b4aee2aa5cc1cb57809134761b36731c4ee
    * Public key: 047ed47fe0738968c59cf1587d9e8c49ff410b44de5407058683c5c0f7776975e5ab0c28042c9545b5659fcf58353776fc6f9e948a53997f45d6b601d6f49a86a3
**/

const myKey = ec.keyFromPrivate('c1e2da0b90ead000248889c6637d9b4aee2aa5cc1cb57809134761b36731c4ee');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
myCoin.minePendingTransactions(myWalletAddress);

console.log(`\n Balance of Piero is ${myCoin.getBalanceOfAddress(myWalletAddress)}`);

