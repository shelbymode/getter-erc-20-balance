import { JsonRpcProvider } from 'ethers';

export interface IHasGetERC20BalanceOf {
	getERC20BalanceOf(contractAddress: string, walletAddress: string, provider: JsonRpcProvider): Promise<string>;
}