import { JsonRpcProvider } from 'ethers';
import { ERC20Balance } from '../getterBalance';

describe('ERC20Balance tests', () => {
  let erc20Balance: ERC20Balance;
  
  const JSON_RPC_URL_PROVIDER = "https://eth.llamarpc.com"
  const contractAddress = '0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE';
  const walletAddress = '0x1C4b70a3968436B9A0a9cf5205c787eb81Bb558c';
  const erc20BalanceVal = "3000000000000000000020000000000"

  beforeEach(() => {
    erc20Balance = new ERC20Balance();
  });

    it('should return the balance of a wallet address for a given ERC20 contract', async () => {
    const provider = new JsonRpcProvider(JSON_RPC_URL_PROVIDER, 1)

    const balance = await erc20Balance.getERC20BalanceOf(contractAddress, walletAddress, provider);
    expect(balance).toBe(erc20BalanceVal)
  });

})



