import { ethers } from "ethers";
import { CONTRACT_ADDRESS, ABI } from "./contractConfig";

export const getContract = (provider: ethers.providers.Web3Provider) => {
  const signer = provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};