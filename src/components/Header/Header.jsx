import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "../../constant";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import NavLink from "../../UI/NavLink";
import logo from "/assets/logo.png";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleNavbar() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="border-b-[1px] overflow-hidden border-[#0000001A] relative">
      <Card classes="flex justify-between items-center p-5 ">
        <a href="#none">
          <img
            src={logo}
            alt="company logo"
            className="w-[200px] h-[38px] object-cover"
          />
        </a>

        <nav className="hidden md:block">
          <ul className="flex gap-5 items-center">
            {navLinks.map((link, i) => (
              <li key={i}>
                <NavLink title={link} />
              </li>
            ))}
            <li>
              <Button text="get started" />
            </li>
          </ul>
        </nav>
        {/* mobile menu */}
        <button
          className="block ml-auto md:hidden text-2xl"
          onClick={handleNavbar}
        >
          <RxHamburgerMenu />
        </button>
       
          
          <ul
            className={`flex justify-center flex-col fixed z-30 h-[100vh] top-0 bottom-0 w-[50%] transition-all shadow-lg bg-[#F1F2F6]  duration-300 translate-[999px] gap-5 items-center md:hidden ${
              isOpen ? "right-0" : "-right-[9999px]"
            }`}
          >
            {navLinks.map((link, i) => (
              <li key={i} className="relative z-30">
                <NavLink title={link} />
              </li>
            ))}
            <li>
              <Button text="get started" />
            </li>
            <li><button className="absolute top-[1.8rem] right-[2rem] block  md:hidden text-2xl" onClick={()=>setIsOpen(false)}><RxCross1 /></button></li>
          </ul>
        
      </Card>
     
    </header>
  );
};

export default Header;
