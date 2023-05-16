## Description

This npm package provides a class called `ERC20Balance` that allows you to retrieve the balance of an ERC20 contract for a given wallet address using `getERC20BalanceOf` method.

## Installation

```bash
npm install getter-erc-20-balance
```

## API

To import `ERC20Balance` class use: 
```js
import { ERC20Balance } from 'getter-erc-20-balance'
```

The `ERC20Balance` class provides the following method:

- `getERC20BalanceOf(contractAddress: string, walletAddress: string, provider: JsonRpcProvider): Promise<string>`

This asynchronous method retrieves the balance of an ERC20 contract for the specified wallet address:
1. `contractAddress` (string): The address of the ERC20 contract.
2. `walletAddress` (string): The address for which the balance should be retrieved.
3. `provider` (JsonRpcProvider): An instance of JsonRpcProvider from the ethers.js library, connected to an Ethereum JSON-RPC provider.

Returns a Promise that resolves to the balance as a string

Good luck!