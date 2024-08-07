import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Homepage from "./Components/Homepage/Homepage";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUsPage from "./Components/AboutUsPage/AboutUsPage";
import { useEffect } from "react";
import Privacypolicy from "./Components/Privacypolicy/Privacypolicy";
import Contactus from "./Components/Contactus/Contactus";


function App() {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/aboutus" element={<AboutUsPage />}/>
        <Route path="/privacypolicy" element={<Privacypolicy />}/>
        <Route path="/contactus" element={<Contactus />}/>
      
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
