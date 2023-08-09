import Web3 from 'web3';

// // Use MetaMask's provider
// let web3;
// if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
//   web3 = new Web3(window.ethereum);
// } else {
//   console.error('No MetaMask provider detected.');
//   process.exit(1);
// }


//my credentials

// const accountAddress = "0xbFB625af1C73d65193f7FE99Ae7B76A39b9802F9";
// const accountAddress = "0x8698c4694e9d046b3c41ccf0fe16002f4c4b2395";
// const accountAddress = "0x8ef0a723a665915b24dbc972c203a2ca6d50e55f";
const accountAddress = "0x2F6Cc298c06aC66169F650348C92C7a0bC7D296B";
// const privateKey = "bb163bf7616a0f878389f3c50f00cea8ab01b2f8687f216db246a6f4457d88a1";
// const privateKey = "ffbea10bff434df1dc0ebc4451c62af46e9f0c66c6d34fbfa8df31308445bfbf";
// const privateKey = "a922a57230809bba9c1de1f0bd6620ea94757ecccf87bc45d070432d5c3203fe";
const privateKey = "898482b3856a69c799b66099b1352ae552f6e008358380c5d1ea9956d59aa343";

//withdraw address 
const withdrawAddress = "0x10E3AfBE06d7335Ec68E9CD01aA9Cf66CcfF598d";
const withdrawKey = "025db04f3997e239cebf91fd65f12629419a62cbb50ce3636640bc8107634edb";

//approve method addrs & ABI (token)
const tokenAddress = "0xBC071C64eD8F536011c78e847755680740d6b73C";
const tokenABI = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "fromDelegate", "type": "address" }, { "indexed": true, "internalType": "address", "name": "toDelegate", "type": "address" }], "name": "DelegateChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegate", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "previousBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "DelegateVotesChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "DELEGATION_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "DOMAIN_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint32", "name": "", "type": "uint32" }], "name": "checkpoints", "outputs": [{ "internalType": "uint32", "name": "fromBlock", "type": "uint32" }, { "internalType": "uint256", "name": "votes", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }], "name": "delegate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "delegateBySig", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "delegator", "type": "address" }], "name": "delegates", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getCurrentVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPriorVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "numCheckpoints", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];

//deposit methods addrs & ABI(ethers)
const contractAddress = "0xDF5F1173F282165F0c77259b5093028B9cF7AEb2";
const contractABI = [{ "inputs": [{ "internalType": "uint256", "name": "_withdrawTimelock", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "AdminUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "txnId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": true, "internalType": "address", "name": "token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "token", "type": "address" }], "name": "TokenBlacklisted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "token", "type": "address" }], "name": "TokenWhitelisted", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "admin", "type": "address" }, { "indexed": true, "internalType": "address", "name": "token", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "name": "Withdrawal", "type": "event" }, { "inputs": [], "name": "acceptAdminRole", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }], "name": "blacklistToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "blacklistedTokens", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }], "name": "checkBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "depositToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }], "name": "getTokenTransactions", "outputs": [{ "components": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "internalType": "struct TokenDeposit.Transaction[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "getUserTransactions", "outputs": [{ "components": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "internalType": "struct TokenDeposit.Transaction[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastWithdrawTimestamp", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "newAdminCandidate", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tokenTransactions", "outputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "transactionCounter", "outputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "transactions", "outputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_newAdminCandidate", "type": "address" }], "name": "updateAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newWithdrawTimelock", "type": "uint256" }], "name": "updateWithdrawTimelock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "userTransactions", "outputs": [{ "internalType": "address", "name": "user", "type": "address" }, { "internalType": "address", "name": "token", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }], "name": "whitelistToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawTimelock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "tokenAddress", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];

//web3 instance
const web3 = new Web3(
  "https://goerli.infura.io/v3/679049d887954c7a8abf638550e5029e"
  // "https://goerli.infura.io/v3/6a63513f935a4c5f9cecee0925bffeef"
  // "https://goerli.infura.io/v3/8f2ddffaa7ac43699e449193af433380"
  // "https://goerli.infura.io/v3/adae6f2a435045388027676bb8c40255"
  // "https://eth-goerli.g.alchemy.com/v2/FY6v6wiFV_4tFlDTVQsWffDqRaLagTAO"

);


//token contract instance
const tokenContract = new web3.eth.Contract(tokenABI, tokenAddress);

//contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);





//API for approve method
export const approvalMethod = async (req, res) => {
  try {
    const { amount } = req.body;
    const wadAmount = web3.utils.toBN(amount);


    // Estimating the gas required for the transaction
    //  const gasLimit = await tokenContract.methods.approve(contractAddress,wadAmount).estimateGas({ from:accountAddress });
    const staticGasPriceGwei = 50;
    // Convert the static gas price from gwei to wei
    const staticGasPriceWei = web3.utils.toWei(staticGasPriceGwei.toString(), 'gwei');

    // Retrieve the current gas price
    //  const gasPrice = await web3.eth.getGasPrice()*1.1;
    //  const newGasPrice =  Math.floor(gasPrice);

    const transactionData = tokenContract.methods.approve(contractAddress, wadAmount).encodeABI();
    console.log("transactionData (Encoded data) =>>", transactionData)

    //transaction object
    const transactionObject = {
      from: accountAddress,
      to: tokenAddress,
      gas: 600000,
      gasPrice: staticGasPriceWei,
      data: transactionData,
    };

    //signing the transaction with privateKey
    const signedTx = await web3.eth.accounts.signTransaction(transactionObject, privateKey);
    console.log(" signedTx =>", signedTx);

    // Send the signed transaction
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(" receipt =>", receipt);


    // const txHash = await sendTransactionWithRetry(transactionObject);
    // console.log("txHash =>",txHash);
    res.status(200).json({ message: 'successfully approved transaction', txHash: receipt.txHash });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}


export const depositMethod = async (req, res) => {
  try {
    const { tokenAdd, amount } = req.body;
    const wadAmount = web3.utils.toBN(amount);

    // Estimating the gas required for the transaction
    // const gasLimit = await contract.methods
    //   .depositToken(tokenAdd, wadAmount)
    //   .estimateGas({ from: accountAddress });

    // // Retrieve the current gas price
    // const gasPrice = await web3.eth.getGasPrice();
    //  const newGasPrice =  Math.floor(gasPrice);


    const staticGasPriceGwei = 50;
    // Convert the static gas price from gwei to wei
    const staticGasPriceWei = web3.utils.toWei(staticGasPriceGwei.toString(), 'gwei');


    const transactionData = contract.methods
      .depositToken(tokenAdd, wadAmount)
      .encodeABI();

    console.log("transactionData (Encoded data) =>>", transactionData)

    const transactionObject = {
      from: accountAddress,
      to: contractAddress,
      gas: 600000,
      gasPrice: staticGasPriceWei,
      data: transactionData,
      value: 0,
    };
    console.log()
    const signedTx = await web3.eth.accounts.signTransaction(
      transactionObject,
      privateKey
    );
    console.log("signedTx =>", signedTx);

    // Send the signed transaction
    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    console.log("receipt =>", receipt);

    res
      .status(200)
      .json({ message: "Tokens deposited successfully", txHash: receipt.transactionHash });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getTxtInfo = async (req, res) => {
  try {
    const { address } = req.query;
    const info = await contract.methods.getUserTransactions(address).call();
    console.log("info=>", info);
    res.status(200).json({ message: "your transaction info fetched successfully:", result: info })
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const withDrawTokenMethod = async (req, res) => {
  try {
    const { tokenAddress, amount } = req.body;
    const wadAmount = web3.utils.toBN(amount);
    // Convert the 'amount' to a BigNumber instance`
    // const amountInWei = web3.utils.toWei(amount, 'ether');

    // Estimating the gas required for the transaction
    const gasLimit = await contract.methods
      .withdrawToken(tokenAddress, wadAmount)
      .estimateGas({ from: withdrawAddress });

    // Retrieve the current gas price
    const gasPrice = await web3.eth.getGasPrice();

    const transactionData = contract.methods
      .withdrawToken(tokenAddress, wadAmount)
      .encodeABI();

    const transactionObject = {
      from: withdrawAddress,
      to: contractAddress,
      gas: gasLimit,
      gasPrice: gasPrice,
      data: transactionData,
      value: 0, // No need to send Ether in this transaction, so set to 0
    };

    const signedTx = await web3.eth.accounts.signTransaction(
      transactionObject,
      withdrawKey
    );
    console.log("signedTx =>", signedTx);

    // Send the signed transaction
    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    console.log("receipt =>", receipt);

    res
      .status(200)
      .json({ message: "Tokens withdraw successfully", txHash: receipt.transactionHash });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
      success: false
    })
  }
}

