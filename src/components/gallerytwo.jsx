import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="bg-slate-950 px-4 h-screen flex items-center flex-col justify-center">
      <h1 className="text-white text-5xl font-bold mb-20 -mt-12 text-center">
        Our Trusted Businesses on the Road to{" "}
        <span className="text-purple-500">Success</span>
      </h1>
      <ShimmerBorderCard />
    </div>
  );
};

const ShimmerBorderCard = () => {
  return (
    <a href="https://www.indiaspicehouseep.com/" target="_blank">
      <div className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-slate-800 p-0.5 transition-all duration-500 hover:scale-[1.01] hover:bg-slate-800/50">
        <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden rounded-[7px] bg-slate-900 p-8 transition-colors duration-500 group-hover:bg-slate-800">
          {/* <FiCloudLightning className="relative z-10 mb-10 mt-2 rounded-full border-2 border-indigo-500 bg-slate-900 p-4 text-7xl text-indigo-500" /> */}

          <img
            src="https://cdn.discordapp.com/attachments/928498867153014847/1154942880121630771/image.png"
            alt="ish"
            className="relative z-10 mb-10 mt-2 rounded-md border-4 border-indigo-500 bg-slate-900 p-2 text-7xl text-indigo-500"
          />

          <h4 className="flex items-center relative z-10 mb-4 w-full text-3xl font-bold text-slate-50">
            India Spice House
            <FaArrowRight className="ml-4 mt-1 hover:-rotate-45 transition-transform duration-300 hover:text-purple-500 hover:transition-transform hover" />
          </h4>
          <p className="relative z-10 text-slate-400">
            A gourmet Indian cuisine located in Eden Prairie and serving twin
            cities since 2008, India Spice House has garnered best name over the
            years and understands the importance of gathering together and
            eating well
          </p>
        </div>

        <motion.div
          initial={{ rotate: "0deg" }}
          animate={{ rotate: "360deg" }}
          style={{ scale: 1.75 }}
          transition={{
            repeat: Infinity,
            duration: 3.5,
            ease: "linear",
          }}
          className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </div>
    </a>
  );
};

export default Gallery;
