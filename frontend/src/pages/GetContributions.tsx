import  { useState } from "react";
import { ethers } from "ethers";
import { getContract } from "../Utils/ethersUtils";
import {CONTRACT_ADDRESS, ABI } from "../Utils/contractConfig"

const GetContribution = () => {
  const [contribution, setContribution] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userAddress, setUserAddress] = useState("");

  const fetchContribution = async () => {
    if (!window.ethereum) {
      setError("MetaMask is not installed!");
      return;
    }

    try {
      setError(null);
      setLoading(true);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = getContract(provider, CONTRACT_ADDRESS, ABI);

      // Ensure MetaMask is connected
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner(accounts[0]);

      // Fetch contribution
      const userContribution = await contract
        .connect(signer)
        .getContribution(userAddress);

      setContribution(ethers.utils.formatEther(userContribution));
    } catch (err) {
      console.error(err);
      setError("Failed to fetch contribution.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="md:text-3xl text-xl font-bold mb-4">Check Your Total Contribution</h1>
      <div className="w-full max-w-md bg-white shadow-xl sm:p-8 md:p-16  rounded-xl p-6">
        <input
          type="text"
          placeholder="Enter Your address"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={userAddress}
          onChange={(e) => setUserAddress(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded md:w-3/4 md:ml-10 md:mt-12 mt-14 w-full hover:bg-blue-600"
          onClick={fetchContribution}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Get Contribution"}
        </button>
        {contribution && (
          <div className="mt-4 md:mt-8  text-center">
            <p className="text-2xl font-bold">
              Contributions: <span className="text-green-500">{contribution} ETH</span>
            </p>
          </div>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default GetContribution;
