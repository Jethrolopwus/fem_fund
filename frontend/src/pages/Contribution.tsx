import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { getContract } from "../Utils/ethersUtils";
import { ABI, CONTRACT_ADDRESS } from "../Utils/contractConfig";

const Contribution = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "", 
    },
  });

  const onSubmit = async (data: any) => {
    try {
      if (!window.ethereum) {
        toast.error("MetaMask is not installed!");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      await provider.send("eth_requestAccounts", []);
      const accounts = await provider.listAccounts();
      if (accounts.length === 0) {
        toast.error("Please connect your wallet!");
        return;
      }

      const contract = getContract(provider, CONTRACT_ADDRESS, ABI);
      const amountInWei = ethers.utils.parseEther(data.amount.toString());

      const txResponse = await contract.contribute(amountInWei);

      toast.info("Transaction is being processed...");
      await txResponse.wait();

      toast.success("Contribution successful!");
      reset();
      navigate("/event");
    } catch (error) {
      console.error(error);
      toast.error("Transaction failed, Please try again Later."); 
      reset(); 
    }
  };

  return (
    <div className="w-full min-h-screen pt-4 flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4 py-4">
          Make Your Contribution
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount to Contribute (ETH)
            </label>
            <input
              id="amount"
              type="number"
              className={`mt-2 block w-full h-10 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                errors.amount ? "border-red-500" : ""
              }`}
              {...register("amount", {
                required: "Amount is required",
                min: { value: 0.01, message: "Amount must be at least 0.01" },
              })}
            />
            {errors.amount?.message && (
              <p className="text-red-500 text-sm mt-1">
                {String(errors.amount.message)}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="md:w-3/4 md:ml-10 md:mt-12 mt-14 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Contribute
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contribution;
