import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import NavBar from "./components/Navbar";
import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";
import classes from "./App.module.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false
    });
    sr.reveal(`nav, main, footer`, { interval: 500 });
  }, []);

  const appClasses = `${classes["app-container"]} ${theme === "light" ? classes.light : ""}`;

  return (
    <div className={appClasses}>
      <ScrollToTop currentTheme={theme} />
      <NavBar changeTheme={changeTheme} currentTheme={theme} />
      <Home currentTheme={theme} />
      <Free currentTheme={theme} />
      <Clients />
      <SuperRare currentTheme={theme} />
      <Release currentTheme={theme} />
      <Like currentTheme={theme} />
      <Signup currentTheme={theme} />
      <Footer currentTheme={theme} />
    </div>
  );
}

export default App;