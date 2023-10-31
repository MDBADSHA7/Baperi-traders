import {Outlet} from "react-router-dom"
import { useEffect, useState } from 'react';
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
const Main =()=>{
    const [theme, setTheme] = useState(false);
    useEffect(() => {
      setTheme(JSON.parse(window.localStorage.getItem("theme")));
    }, []);
    const handleThemeChange = () => {
      setTheme(!theme);
      window.localStorage.setItem("theme", !theme);
    };
    return(
        <div data-theme={theme && "my_dark"} className="">
          <Navbar handleThemeChange={handleThemeChange} theme={theme}></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};
export default Main;