import hero from "../assets/heroimg.png";
import icon1 from "../assets/mdi_women.svg";
import icon2 from "../assets/game-icons_team-idea.svg";
import icon3 from "../assets/foundation_social-skillshare.svg";
import women from "../assets/women.png";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ethers } from "ethers";

const Home = () => {
  const navigate = useNavigate();
  const handleGetStarted = async () => {
    try {
      if (!window.ethereum) {
        toast.error("MetaMask is not installed!");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);

      toast.success("Wallet connected successfully!");
      navigate("/contribution");
    } catch (error) {
      toast.error("Failed to connect wallet. Please try again.");
    }
  };


  return (
    <div className="min-h-screen overflow-x-hidden mt-20 md:mt-32 dark:bg-white ">
      <section className="pb-10">
      <div className="flex flex-wrap md:flex-nowrap mx-8 justify-center items-center gap-10">
        <div className="w-full md:w-[640px] text-center md:text-center">
          <h1 className="text-[36px] md:text-[50px] lg:text-[80px] font-normal font-serif leading-tight">
            Empowering Women Through Shared Savings!
          </h1>
          <p className="text-base md:text-xl leading-6 font-normal w-full md:w-[480px] mt-4 mx-auto md:mx-auto font-serif">
            Join a community where women pool resources, buy essential items,
            and share them fairly every month.
          </p>
          <button
            onClick={handleGetStarted}
            className="py-2 px-6 border bg-[#0E369E] mt-4 text-white rounded-xl hover:bg-blue-500 md:mx-52"
          >
            Get started today
          </button>
        </div>
        <div className="w-full md:w-auto flex justify-center">
          <img
            src={hero}
            alt="Hero Image"
            className="w-[80%] md:w-[450px] h-auto object-cover"
          />
        </div>
      </div>

      <div className="mx-8 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-[#4A9FEB] p-6 h-auto rounded-xl flex flex-col items-center">
          <div className="border-2 rounded-full p-2 bg-[#0E369E] w-[44px] h-[44px] flex justify-center items-center">
            <img src={icon1} alt="icon" />
          </div>
          <p className="text-xl font-serif font-normal leading-6 mt-6 text-center">
            Join a community of like-minded women pooling their resources to
            make dreams a reality—one month at a time.
          </p>
        </div>
        <div className="border border-[#4A9FEB] p-6 h-auto rounded-xl flex flex-col items-center">
          <div className="border-2 rounded-full p-2 bg-[#0E369E] w-[44px] h-[44px] flex justify-center items-center">
            <img src={icon2} alt="icon" />
          </div>
          <p className="text-xl font-serif font-normal leading-6 mt-6 text-center">
            With every monthly contribution, access and share essential items
            that improve your life and family.
          </p>
        </div>
        <div className="border border-[#4A9FEB] p-6 h-auto rounded-xl flex flex-col items-center">
          <div className="border-2 rounded-full p-2 bg-[#0E369E] w-[44px] h-[44px] flex justify-center items-center">
            <img src={icon3} alt="icon" />
          </div>
          <p className="text-xl font-serif font-normal leading-6 mt-6 text-center">
            Experience the power of teamwork, financial discipline, and shared
            success—all in one platform.
          </p>
        </div>
      </div>
    </section>


      <section className="flex flex-wrap justify-center items-center gap-12 w-full bg-[#F4F4F4] py-12">
        <div className="w-full md:w-[400px] flex justify-center">
          <img src={women} alt="women" className="w-[80%] md:w-[400px]" />
        </div>
        <div className="w-full md:w-[400px] mt-4 text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-normal leading-9">
            Save Smarter, Shop Better – In Just 3 Easy Steps!
          </h1>
          <p className="mt-10 text-base md:text-xl font-normal leading-6">
            Contribute a set amount to your group’s savings pot every month
            effortlessly through our platform.
          </p>
          <p className="mt-4 text-base md:text-xl font-normal leading-6">
            Don’t just save—thrive together!
          </p>
          <p className="mt-4 text-base md:text-xl font-normal leading-6">
            Join a growing community of women building stronger financial habits and achieving their goals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
