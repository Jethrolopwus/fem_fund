import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Contribution = () => {
  

    
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    
    console.log(data);
    toast.success("Contribution submitted successfully!");
    reset();
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
              {...register("username", { required: "Username is required" })}
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
                min: { value: 1, message: "Amount must be at least 1" },
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
            className="w-full md:w-3/4 lg:w-3/4 ml-10  bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
