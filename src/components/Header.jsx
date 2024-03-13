
import { motion } from "framer-motion"

const Header = () => {
  return (
    
<section  className=" h-[140vh]" data-scroll-section>
  

   <div className=" h-full w-full flex items-center justify-center">
      <img src="/bg.jpg" alt="" className=" h-full w-full relative" />


     
   
      <motion.div
      className=" justify-center items-center absolute top-16 z-10  flex flex-col gap-3 text-black capitalize"
      data-scroll
      data-scroll-direction="vertical"
      data-scroll-speed="-6"
      
        >
      <h1 className=" text-9xl font-semibold "
        >Namaste</h1>
        <p className=""></p>
      </motion.div>

      <div className="justify-center items-center w-full h-full absolute top-52 left-0 bottom-10 right-0 flex">
      <img src="/india-gate.png" alt="" className=" w-[70rem] z-40 "
             data-scroll data-scroll-direction="verticall"
             data-scroll-speed="2" />
      </div>

     
   </div>
</section>
 

  )
}

export default Header