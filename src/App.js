import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Aboutus from "./components/Aboutus";



function App() {


  const menucl = () =>{



  }
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Aboutus" element={<Aboutus/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;


{/* npx tailwindcss -i ./src/index.css -o ./public/style.css --watch 

npm install redux react-redux --save-dev

npm install @reduxjs/toolkit    npm install react-router-dom@6

*/ }

{/*
const Services = () =>{


  return(
      <div className="services">
  
      </div>
  )
  }
  
  export default Services;
*/ }
