import "./Nav.scss";
import logo from "../../assets/android-chrome-512x512.png";
import { Cross, Cross as Hamburger } from "hamburger-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  let navLinks = ["Home", "About", "Experience", "Skills", "Work", "Contact"];
  return (
    <>
      <nav className="fixed top-0 w-full flex items-center justify-center z-50">
        <div
          className={`nav-container flex justify-between rounded-[50px] px-6 py-2 mt-4 w-[90%] overflow-hidden relative`}
        >
          <div className="nav-logo">
            <img className="w-10" src={logo} alt="Logo" />
          </div>
          <div className="nav-links hidden">{}</div>
          <div className="ham-burger sm:hidden">
            <Cross toggled={isOpen} toggle={setIsOpen} rounded color="#ffff" />
          </div>
        </div>
      </nav>

      <div className={`mob-nav-cont ${
            isOpen ? "fixed" : "hidden"
          } w-full h-[100vh] top-0 z-[100] flex justify-end overflow-hidden`}>
        <div
          className={`mob-nav-container z-[100] absolute top-0 w-[250px] h-[100vh] bg-white flex justify-end transition-all duration-300`}
        >
          <div className="close-nav absolute top-3 right-6">
            <Cross toggled={isOpen} toggle={setIsOpen} rounded />
          </div>
          <div className="mob-nav-links sm:hidden text-black text-right mt-[100px] mr-10">
            <ul>
              {navLinks.map((link, key) => (
                <a key={key} href="#" className="font-normal text-[20px]">
                  <li className="mt-2">{link}</li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
