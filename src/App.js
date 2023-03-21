import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Reviews from "./components/sections/Reviews";
import Work from "./components/sections/Work";

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <div className="flex flex-col gap-12 lg:gap-60 py-12">
      <Navbar />
      <Hero />
      <Work />
      <Portfolio />
      <Reviews />
      <Contact />

    </div>
    </div>
  );
}

export default App;
