import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "./App.css"
import Header from "./components/Header";



const App = () => {

  const ref = useRef(null);

  const options = {
   
     smooth: true,

  } 


  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
    
      <main data-scroll-container ref={ref} className=" text-[#45474B]">
     

        <Header/>
    
        <section className=" h-screen w-full text-black items-center justify-center flex bg-slate-600" data-scroll-section>
          <h1 className=" text-6xl font-bold">I Love React</h1>
        </section>
        <section className="footer h-[30vh] flex items-center justify-center" data-scroll-section>
          <h1>Let end the application with this Footer</h1>
        </section>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App
