import { ethers } from 'ethers';
import { JsonRpcProvider } from 'ethers';
import { IHasGetERC20BalanceOf } from './getterBalance.interface';

export class ERC20Balance implements IHasGetERC20BalanceOf {
  async getERC20BalanceOf(contractAddress: string, walletAddress: string, provider: JsonRpcProvider): Promise<string> {
    const abi = ['function balanceOf(address) view returns (uint256)'];
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const balance = await contract.balanceOf(walletAddress);
    
    return balance.toString();
  }
}

