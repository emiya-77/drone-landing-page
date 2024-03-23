import Button from "./Button"
import { motion } from "framer-motion";

const Banner = () => {

  return (
    <div className="flex justify-center items-center my-36">
      <div className="absolute w-full h-full flex justify-center items-start -mt-20" data-aos="fade-up" data-aos-duration="1000">
        <div className="hover:-rotate-6 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm shadow-lg rounded-3xl pb-4 px-16 hover:scale-105 transition-all duration-300">
          <h1 className="text-[130px] font-bold text-white tracking-wider">Drones</h1>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div>
          <h3 className="font-medium uppercase text-2xl">Modern Technology</h3>
          <h1 className="font-bold text-8xl mb-4">Drone</h1>
          <p className="text-gray-500 w-[400px] mb-8">Visual artists use drones to capture beautiful new images and camera angles.</p>
          <Button text="View More"></Button>
        </div>
      </div>
      <div className="flex-1 pt-20" data-aos="fade-left" data-aos-duration="1000">
        <motion.div
          animate={{ x: -100 }}
          transition={{ type: "tween", duration: 3 }}
          initial={{ x: 1000 }}
        >
          <img
            // className="w-[500px]" 
            // src="/flying-drone.gif" 
            src="https://i.gifer.com/SpxP.gif"
            alt="" />
        </motion.div>
      </div>
    </div>
  )
}

export default Banner;