import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;


{/* npx tailwindcss -i ./src/index.css -o ./public/style.css --watch 

npm install redux react-redux --save-dev

npm install @reduxjs/toolkit

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
