
const atariContract = {
    kovan :  "0xdacd69347de42babfaecd09dc88958378780fb62",
    mainnet :  "0xdacd69347de42babfaecd09dc88958378780fb62",
    bsc :  "0xc0c6e4c6e70c6231b20979bda581a66f062a7967",
	name :"Atari",
	synbole :"ATRI",
	decimals :0,
    abi :  [
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "previousOwner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "OwnershipTransferred",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				}
			],
			"name": "allowance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "address",
					"name": "account",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
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
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
					"name": "",
					"type": "uint8"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "subtractedValue",
					"type": "uint256"
				}
			],
			"name": "decreaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getOwner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "addedValue",
					"type": "uint256"
				}
			],
			"name": "increaseAllowance",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "mint",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
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
			"inputs": [],
			"name": "owner",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "renounceOwnership",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
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
			"inputs": [],
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "recipient",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amount",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"internalType": "address",
					"name": "newOwner",
					"type": "address"
				}
			],
			"name": "transferOwnership",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}

const uniswapRouterContract = {
	kovan : "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
	mainnet: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
	bsc: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
	abi : [
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "_factory",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_WETH",
					"type": "address"
				}
			],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"inputs": [],
			"name": "WETH",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amountADesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBDesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "addLiquidity",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenDesired",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETHMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "addLiquidityETH",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountToken",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETH",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "factory",
			"outputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveOut",
					"type": "uint256"
				}
			],
			"name": "getAmountIn",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveOut",
					"type": "uint256"
				}
			],
			"name": "getAmountOut",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				}
			],
			"name": "getAmountsIn",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				}
			],
			"name": "getAmountsOut",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "view",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "reserveB",
					"type": "uint256"
				}
			],
			"name": "quote",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				}
			],
			"stateMutability": "pure",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "removeLiquidity",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETHMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "removeLiquidityETH",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountToken",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETH",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETHMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountETH",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETHMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "approveMax",
					"type": "bool"
				},
				{
					"internalType": "uint8",
					"name": "v",
					"type": "uint8"
				},
				{
					"internalType": "bytes32",
					"name": "r",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "s",
					"type": "bytes32"
				}
			],
			"name": "removeLiquidityETHWithPermit",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountToken",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETH",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "token",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountTokenMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountETHMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "approveMax",
					"type": "bool"
				},
				{
					"internalType": "uint8",
					"name": "v",
					"type": "uint8"
				},
				{
					"internalType": "bytes32",
					"name": "r",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "s",
					"type": "bytes32"
				}
			],
			"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountETH",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "tokenA",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "tokenB",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountAMin",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountBMin",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "bool",
					"name": "approveMax",
					"type": "bool"
				},
				{
					"internalType": "uint8",
					"name": "v",
					"type": "uint8"
				},
				{
					"internalType": "bytes32",
					"name": "r",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "s",
					"type": "bytes32"
				}
			],
			"name": "removeLiquidityWithPermit",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amountA",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountB",
					"type": "uint256"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapETHForExactTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactETHForTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
			"outputs": [],
			"stateMutability": "payable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForETH",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountIn",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountOutMin",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountInMax",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapTokensForExactETH",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amountOut",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amountInMax",
					"type": "uint256"
				},
				{
					"internalType": "address[]",
					"name": "path",
					"type": "address[]"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				}
			],
			"name": "swapTokensForExactTokens",
			"outputs": [
				{
					"internalType": "uint256[]",
					"name": "amounts",
					"type": "uint256[]"
				}
			],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"stateMutability": "payable",
			"type": "receive"
		}
	]
}

const uniswapPairContract = {
	kovan : "0xc4d9102e36c5063b98010A03C1F7C8bD44c32A00",
	mainnet : "0xc4d9102e36c5063b98010A03C1F7C8bD44c32A00",
	bsc : "0xc7943A6036a894d75B5B7b56A20120435B7B0E08",
	name : "Uniswap V2",
	symbol : "UNI-V2",
	decimals :18,
	abi : [
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Approval",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "Burn",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1",
					"type": "uint256"
				}
			],
			"name": "Mint",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0In",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1In",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount0Out",
					"type": "uint256"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "amount1Out",
					"type": "uint256"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "Swap",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "uint112",
					"name": "reserve0",
					"type": "uint112"
				},
				{
					"indexed": false,
					"internalType": "uint112",
					"name": "reserve1",
					"type": "uint112"
				}
			],
			"name": "Sync",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": true,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "Transfer",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "DOMAIN_SEPARATOR",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "MINIMUM_LIQUIDITY",
			"outputs": [
				{
					"internalType": "uint256",
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
			"name": "PERMIT_TYPEHASH",
			"outputs": [
				{
					"internalType": "bytes32",
					"name": "",
					"type": "bytes32"
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
					"internalType": "address",
					"name": "",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "allowance",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "approve",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "balanceOf",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "burn",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "amount0",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount1",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "decimals",
			"outputs": [
				{
					"internalType": "uint8",
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
			"inputs": [],
			"name": "factory",
			"outputs": [
				{
					"internalType": "address",
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
			"name": "getReserves",
			"outputs": [
				{
					"internalType": "uint112",
					"name": "_reserve0",
					"type": "uint112"
				},
				{
					"internalType": "uint112",
					"name": "_reserve1",
					"type": "uint112"
				},
				{
					"internalType": "uint32",
					"name": "_blockTimestampLast",
					"type": "uint32"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "_token0",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "_token1",
					"type": "address"
				}
			],
			"name": "initialize",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "kLast",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "mint",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "liquidity",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "name",
			"outputs": [
				{
					"internalType": "string",
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
					"internalType": "address",
					"name": "",
					"type": "address"
				}
			],
			"name": "nonces",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "owner",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "spender",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "deadline",
					"type": "uint256"
				},
				{
					"internalType": "uint8",
					"name": "v",
					"type": "uint8"
				},
				{
					"internalType": "bytes32",
					"name": "r",
					"type": "bytes32"
				},
				{
					"internalType": "bytes32",
					"name": "s",
					"type": "bytes32"
				}
			],
			"name": "permit",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "price0CumulativeLast",
			"outputs": [
				{
					"internalType": "uint256",
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
			"name": "price1CumulativeLast",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				}
			],
			"name": "skim",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "uint256",
					"name": "amount0Out",
					"type": "uint256"
				},
				{
					"internalType": "uint256",
					"name": "amount1Out",
					"type": "uint256"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "bytes",
					"name": "data",
					"type": "bytes"
				}
			],
			"name": "swap",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "symbol",
			"outputs": [
				{
					"internalType": "string",
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [],
			"name": "sync",
			"outputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "token0",
			"outputs": [
				{
					"internalType": "address",
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
			"name": "token1",
			"outputs": [
				{
					"internalType": "address",
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
			"name": "totalSupply",
			"outputs": [
				{
					"internalType": "uint256",
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "transfer",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
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
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "uint256",
					"name": "value",
					"type": "uint256"
				}
			],
			"name": "transferFrom",
			"outputs": [
				{
					"internalType": "bool",
					"name": "",
					"type": "bool"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		}
	]
}

const uniswapV3RouterContract = {
    mainnet : "0xE592427A0AEce92De3Edee1F18E0157C05861564",
    abi : [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_factory",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_WETH9",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "WETH9",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "path",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountIn",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountOutMinimum",
                  "type": "uint256"
                }
              ],
              "internalType": "struct ISwapRouter.ExactInputParams",
              "name": "params",
              "type": "tuple"
            }
          ],
          "name": "exactInput",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "tokenIn",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "tokenOut",
                  "type": "address"
                },
                {
                  "internalType": "uint24",
                  "name": "fee",
                  "type": "uint24"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountIn",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountOutMinimum",
                  "type": "uint256"
                },
                {
                  "internalType": "uint160",
                  "name": "sqrtPriceLimitX96",
                  "type": "uint160"
                }
              ],
              "internalType": "struct ISwapRouter.ExactInputSingleParams",
              "name": "params",
              "type": "tuple"
            }
          ],
          "name": "exactInputSingle",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountOut",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "bytes",
                  "name": "path",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountInMaximum",
                  "type": "uint256"
                }
              ],
              "internalType": "struct ISwapRouter.ExactOutputParams",
              "name": "params",
              "type": "tuple"
            }
          ],
          "name": "exactOutput",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "tokenIn",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "tokenOut",
                  "type": "address"
                },
                {
                  "internalType": "uint24",
                  "name": "fee",
                  "type": "uint24"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "deadline",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountOut",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountInMaximum",
                  "type": "uint256"
                },
                {
                  "internalType": "uint160",
                  "name": "sqrtPriceLimitX96",
                  "type": "uint160"
                }
              ],
              "internalType": "struct ISwapRouter.ExactOutputSingleParams",
              "name": "params",
              "type": "tuple"
            }
          ],
          "name": "exactOutputSingle",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "amountIn",
              "type": "uint256"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "factory",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes[]",
              "name": "data",
              "type": "bytes[]"
            }
          ],
          "name": "multicall",
          "outputs": [
            {
              "internalType": "bytes[]",
              "name": "results",
              "type": "bytes[]"
            }
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "refundETH",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "selfPermit",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "selfPermitAllowed",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "nonce",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiry",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "selfPermitAllowedIfNecessary",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "name": "selfPermitIfNecessary",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amountMinimum",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "name": "sweepToken",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amountMinimum",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "feeBips",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "feeRecipient",
              "type": "address"
            }
          ],
          "name": "sweepTokenWithFee",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "amount0Delta",
              "type": "int256"
            },
            {
              "internalType": "int256",
              "name": "amount1Delta",
              "type": "int256"
            },
            {
              "internalType": "bytes",
              "name": "_data",
              "type": "bytes"
            }
          ],
          "name": "uniswapV3SwapCallback",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountMinimum",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            }
          ],
          "name": "unwrapWETH9",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "amountMinimum",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "recipient",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "feeBips",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "feeRecipient",
              "type": "address"
            }
          ],
          "name": "unwrapWETH9WithFee",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "stateMutability": "payable",
          "type": "receive"
        }
      ]
}

const uniswapV3PairContract = {
    mainnet : "0xB2f8b3Bad4325C3C62f294dA45FC144B1B180CC2"
}

module.exports = {uniswapRouterContract,uniswapPairContract,uniswapV3RouterContract,uniswapV3PairContract,atariContract};