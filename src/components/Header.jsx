


const Header = () => {
  return (
    
<section className=" h-[140vh]" data-scroll-section>

   <div className=" h-full w-full flex items-center justify-center">
      <img src="/bg.jpg" alt="" className=" h-full w-full relative" />

     
   
      <div className=" justify-center items-center absolute top-0  flex flex-col gap-3 text-white capitalize"
        data-scroll data-scroll-direction="verticall"
        data-scroll-speed="-8">
      <h1 className=" text-9xl font-semibold z-10">Namaste</h1>
      </div>

      <div className="justify-center items-start absolute top-96 left-20 bottom-10 flex flex-col gap-3 text-white capitalize"
       data-scroll data-scroll-direction="horizontal"
       data-scroll-speed="0">
      <img src="/india-gate.png" alt="" className=" z-40 "
             data-scroll data-scroll-direction="verticall"
             data-scroll-speed="1" />
      </div>

     
   </div>
</section>
 

  )
}

export default Header