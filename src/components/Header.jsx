


const Header = () => {
  return (
    
<section  className=" h-[140vh]" data-scroll-section>
  

   <div className=" h-full w-full flex items-center justify-center">
      <img src="/bg.jpg" alt="" className=" h-full w-full relative" />


     
   
      <div id="stick" className=" justify-center items-center absolute top-0 bottom-0 left-0 right-0 flex flex-col gap-3 text-black capitalize"
        >
      <h1 className=" text-9xl font-semibold z-10 absolute top-20"
         data-scroll
         data-scroll-speed="5"
         data-scroll-sticky // Attibute that enables the sticky scroll
         data-scroll-target="#stick">Namaste</h1>
      </div>

      <div className="justify-center items-center w-full h-full absolute top-52 left-0 bottom-10 right-0 flex">
      <img src="/india-gate.png" alt="" className=" z-40 "
             data-scroll data-scroll-direction="verticall"
             data-scroll-speed="1" />
      </div>

     
   </div>
</section>
 

  )
}

export default Header