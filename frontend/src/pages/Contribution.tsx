import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

const Contribution = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      if (!window.ethereum) {
        toast.error("MetaMask is not installed!");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (accounts.length === 0) {
        toast.error("Please connect your wallet!");
        return;
      }

      const signer = provider.getSigner();

     
      const transaction = {
        to: data.username, 
        value: ethers.utils.parseEther(data.amount.toString()), 
      };

     
      const txResponse = await signer.sendTransaction(transaction);

      toast.info("Transaction is being processed...");

      await txResponse.wait();

    
      toast.success("Transaction successful!");
      reset();

    
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Transaction failed. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen pt-4 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md mb-6 w-96 ">
        <h1 className="text-2xl font-bold text-center mb-4">
          Make Your Contribution
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              UserAddress
            </label>
            <input
              id="username"
              type="text"
              className={`mt-1 block w-full h-10 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                errors.username ? "border-red-500" : ""
              }`}
              {...register("username", { required: "UserAddress is required" })}
            />
            {errors.username?.message && (
              <p className="text-red-500 text-sm mt-1">
                {String(errors.username.message)}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="id"
              className="block text-sm font-medium text-gray-700"
            >
              ID
            </label>
            <input
              id="id"
              type="text"
              className={`mt-1 block w-full h-10 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                errors.id ? "border-red-500" : ""
              }`}
              {...register("id", { required: "ID is required" })}
            />
            {errors.id?.message && (
              <p className="text-red-500 text-sm mt-1">
                {String(errors.id.message)}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount to Contribute
            </label>
            <input
              id="amount"
              type="number"
              className={`mt-1 block w-full h-10 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
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
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
