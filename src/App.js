import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Services from "./components/Services";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Info from "./components/Info";
import Footer from "./components/Footer";
import "./styles/responsive.css";
import "./App.css";


const App = () => {
  return (
    <div className="App">
      <div className="hero_area">
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src="images/hero-bg.png" alt="" />
        </div>
      </div>
      <Header />
      <Slider />
      </div>
      <Services />
      <About />
      <WhyUs />
      <Team />
      <Testimonials />
      <Info />
      <Footer />
    </div>
  );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/style.css";
// import "./styles/responsive.css";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Team from "./pages/Team";
// import WhyUs  from "./pages/WhyUs";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//          <Route path="/services" element={<Services />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/why" element={<WhyUs />} />
//         <Route path="/contact" element={<Contact />} /> 
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
