import { ethers } from "ethers";

export const getContract = (provider: ethers.providers.Web3Provider, CONTRACT_ADDRESS: string, ABI: ({ inputs: { internalType: string; name: string; type: string; }[]; stateMutability: string; type: string; anonymous?: undefined; name?: undefined; outputs?: undefined; } | { anonymous: boolean; inputs: { indexed: boolean; internalType: string; name: string; type: string; }[]; name: string; type: string; stateMutability?: undefined; outputs?: undefined; } | { inputs: { internalType: string; name: string; type: string; }[]; name: string; outputs: { internalType: string; name: string; type: string; }[]; stateMutability: string; type: string; anonymous?: undefined; })[]) => {
  const signer = provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};