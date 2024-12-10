import { useForm} from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormInputs {
    goal: string;
    duration: string;
  }
const Admin = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm<FormInputs>();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const onSubmit = (data: any) => {
        console.log(data);
        toast.success("Contribution submitted successfully!");
        reset();
      };

  return (
    <div>
        <section className="h-screen">
       <div className="max-w-md mx-auto p-8 py-10 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-4 text-center">Reset Cycle</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="goal" className="block text-sm  font-medium text-gray-700">
            New Goal
          </label>
          <input
            id="goal"
            type="number"
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
              errors.goal ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter new goal"
            {...register("goal", { required: "Goal is required" })}
          />
          {errors.goal && (
            <p className="text-red-500 text-sm mt-1">{errors.goal.message}</p>
          )}
        </div>
        <div className="pt-10">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Duration (seconds)
          </label>
          <input
            id="duration"
            type="number"
            className={`mt-1 block w-full p-2 border rounded-md shadow-sm ${
              errors.duration ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter duration in seconds"
            {...register("duration", { required: "Duration is required" })}
          />
          {errors.duration && (
            <p className="text-red-500 text-sm mt-1">
              {errors.duration.message}
            </p>
          )}
        </div>
        <div className="pt-8 mx-auto md:w-1/2">
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Reset Cycle
        </button>
        </div>
      </form>
      <ToastContainer />
    </div>
        </section>
    </div>
  )
}

export default Admin;