var express = require('express');
var app = express();
var task_code = '';
var ToAddress = '';
var FromAddress = '';
var ContractAddress = '';
var PrivateKey = '';
var NoToken = '';
var NoEther = '';

const Web3 = require("web3");
const web3 = new Web3();
const Tx = require("ethereumjs-tx");
var Web3EthAccounts = require('web3-eth-accounts');
web3.setProvider(new web3.providers.HttpProvider("https://mainnet.infura.io/SGphGVYXzTeGCaHojW7d"));
var abi = var abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "sellPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "buyPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "frozenAccount",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Burn",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newSellPrice",
                "type": "uint256"
            },
            {
                "name": "newBuyPrice",
                "type": "uint256"
            }
        ],
        "name": "setPrices",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            },
            {
                "name": "_extraData",
                "type": "bytes"
            }
        ],
        "name": "approveAndCall",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "target",
                "type": "address"
            },
            {
                "name": "mintedAmount",
                "type": "uint256"
            }
        ],
        "name": "mintToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "initialSupply",
                "type": "uint256"
            },
            {
                "name": "tokenName",
                "type": "string"
            },
            {
                "name": "tokenSymbol",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "sell",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "target",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "frozen",
                "type": "bool"
            }
        ],
        "name": "FrozenFunds",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "buy",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "parent",
                "type": "address"
            },
            {
                "name": "percent",
                "type": "uint8"
            }
        ],
        "name": "buyrefer",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "target",
                "type": "address"
            },
            {
                "name": "freeze",
                "type": "bool"
            }
        ],
        "name": "freezeAccount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "burnFrom",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

var abiArray = abi;


app.get('/', function (req, res) {
    task_code = req.query.task;
    ToAddress = req.query.ToAddress;
    FromAddress = req.query.FromAddress;
    PrivateKey = req.query.PrivateKey;
    NoToken = req.query.NoToken;
    contractAddress = req.query.TokenCode;
	NoEther = req.query.NoEther;

    if(task_code == "Create"){
        Create(res);
    }else{
        if(task_code == "TokenTransfer"){
            TokenTransfer(res,ToAddress,NoToken,FromAddress,PrivateKey,contractAddress);
        }else{
            if(task_code == "EtherTransfer"){
                EtherTransfer(res,ToAddress,NoEther,FromAddress,PrivateKey);
            }else{
                if(task_code == "getEther"){
                    getEther(res,ToAddress);
                }else{
                    if(task_code == "getToken"){
                        getToken(res,ToAddress,contractAddress);
                    }else{
					res.contentType('application/json');
                    res.end(JSON.stringify("Error"));
                    }
                }
            }
        }
    }
});

function Create(res){
    var account = new Web3EthAccounts('https://mainnet.infura.io/SGphGVYXzTeGCaHojW7d');

    res.contentType('application/json');
    res.end(JSON.stringify(account.create()));
}
function getEther(res,ToAddress){
    var balance = web3.eth.getBalance(ToAddress);

	
	var response = {
		    status  : 'success',
		    balance : balance.toNumber()
		}

res.contentType('application/json');
res.end(JSON.stringify(response));
			
}
function getToken(res,ToAddress ,contractAddress){
	var contract =  web3.eth.contract(abiArray).at(contractAddress);
    contract.balanceOf(ToAddress, (err, result) => {
		if (!err){
		var response = {
		    status  : 'success',
		    balance : result
		}

            res.contentType('application/json');
            res.end(JSON.stringify(response));
        }
        else{
         var response = {
		    status  : 'error',
		    balance : err
		}

            res.contentType('application/json');
            res.end(JSON.stringify(response));
        }
    });
}

function TokenTransfer(res,ToAddress,NoToken,FromAddress,PrivateKey,contractAddress){
	var contract =  web3.eth.contract(abiArray).at(contractAddress);
    web3.eth.defaultAccount = FromAddress;
    var count = web3.eth.getTransactionCount(web3.eth.defaultAccount);
    var data = contract.transfer.getData(ToAddress, NoToken);
    var gasPrice = web3.eth.gasPrice;
    var gasLimit = 90000;
    
    var rawTransaction = {
        "from": FromAddress,
        "nonce": web3.toHex(count),
        "gasPrice": web3.toHex(gasPrice),
        "gasLimit": web3.toHex(gasLimit),
        "to": contractAddress,
        "data": data,
        "chainId": 0x01
    };
     var privKey = new Buffer(PrivateKey, 'hex');
    var tx = new Tx(rawTransaction);

    tx.sign(privKey);
    var serializedTx = tx.serialize();
    
 web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
     if (!err){
		var response = {
		    status  : 'success',
		    transaction : hash
		}

            res.contentType('application/json');
            res.end(JSON.stringify(response));
        }
        else{
       

            res.contentType('application/json');
            res.end(JSON.stringify(err));
        }
        }
    );
    
    

}
function EtherTransfer(res,ToAddress,NoEther,FromAddress,PrivateKey){
    web3.eth.defaultAccount = FromAddress;
    var count = web3.eth.getTransactionCount(web3.eth.defaultAccount);
    var data = contract.transfer.getData(ToAddress, NoEther);
    var gasPrice = web3.eth.gasPrice;
    var gasLimit = 900000;

    var rawTransaction = {
        "from": FromAddress,
        "nonce": web3.toHex(count),
        "gasPrice": web3.toHex(gasPrice),
        "gasLimit": web3.toHex(gasLimit),
        "to": ToAddress,
        "value": web3.toHex(NoEther),
        "data": data,
        "chainId": 0x01
    };

    var privKey = new Buffer(PrivateKey, 'hex');
    var tx = new Tx(rawTransaction);

    tx.sign(privKey);
    var serializedTx = tx.serialize();

    web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
if (!err){
		var response = {
		    status  : 'success',
		    transaction : hash
		}

            res.contentType('application/json');
            res.end(JSON.stringify(response));
        }
        else{
         var response = {
		    status  : 'error',
		    balance : err
		}

            res.contentType('application/json');
            res.end(JSON.stringify(response));
        }
        }
    );
}

if (module === require.main) {
    // Start the server
    var server = app.listen(process.env.PORT || 8085, function () {
        var port = server.address().port;
        console.log('App listening on port %s', port);
    });
}
module.exports = app;
