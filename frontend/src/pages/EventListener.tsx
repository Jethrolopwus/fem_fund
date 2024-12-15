import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getContract } from "../Utils/ethersUtils";
import { ABI, CONTRACT_ADDRESS } from "../Utils/contractConfig";

interface Contribution {
  user: string;
  amount: string;
}

const EventListener = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);

  useEffect(() => {
    const fetchAndListenEvents = async () => {
      if (!window.ethereum) {
        console.error("MetaMask is not installed!");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = getContract(provider, CONTRACT_ADDRESS, ABI);

      try {

        const eventFilter = contract.filters.ContributionMade();
        const pastEvents = await contract.queryFilter(eventFilter);

        const pastContributions = pastEvents.map((event) => {
          if (!event.args) {
            console.warn("Event args are undefined", event);
            return null;
          }

          const { user, amount } = event.args;
          return {
            user,
            amount: ethers.utils.formatEther(amount),
          };
        }).filter((contribution): contribution is Contribution => contribution !== null);

        setContributions((prevContributions) => [
          ...prevContributions,
          ...pastContributions,
        ]);

 
        contract.on("ContributionMade", (user: string, amount: ethers.BigNumber) => {
          setContributions((prevContributions) => [
            ...prevContributions,
            { user, amount: ethers.utils.formatEther(amount) },
          ]);
        });
      } catch (error) {
        console.error("Error fetching events:", error);
      }

      return () => {
        contract.removeAllListeners("ContributionMade");
      };
    };

    fetchAndListenEvents();
  }, []);

  return (
    <div className="p-4 min-h-screen md:mt-32 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">All Contributions</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-600">
            <tr>
              <th className="px-4 py-2 text-left text-white text-2xl font-medium">Contributor's Address</th>
              <th className="px-4 py-2 text-left text-white text-2xl font-medium">Amount (ETH)</th>
            </tr>
          </thead>
          <tbody>
            {contributions.length > 0 ? (
              contributions.map((contribution, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } border-b`}
                >
                  <td className="px-4 py-2 text-gray-800 text-sm">{contribution.user}</td>
                  <td className="px-4 py-2 text-gray-800 text-sm">{contribution.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={2}
                  className="px-4 py-2 text-center text-gray-500 text-sm"
                >
                  No contributions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventListener;
