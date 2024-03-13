


const Header = () => {
  return (
    
<section className=" h-screen bg-[#F5F7F8]" data-scroll-section>

   <div className=" h-full w-full flex items-center justify-center">
      <img src="/india-gate.jpg" alt="" className=" h-full w-full relative" />
      <div className=" justify-center items-start absolute top-96 left-20 bottom-10 flex flex-col gap-3 text-white capitalize"
      data-scroll data-scroll-direction="horizontal"
      data-scroll-speed="-2">

      <h1 className="  text-9xl font-bold">Namaste </h1>
      <p className=" text-4xl font-semibold">To the land of diversity</p>
      </div>
   </div>
</section>
 

  )
}

export default Header