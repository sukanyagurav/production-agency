import { GoArrowUpRight } from "react-icons/go";

const NavLink = ({title}) => {
  return (
    <a href="#none" className="flex justify-center items-center font-[600] uppercase gap-1.5  text-[0.8rem] text-[#636363] transition-text duration-300 hover:text-black  sans navLink ">
      <span>{title}</span>
      <GoArrowUpRight className="navIcon transition duration-300" />
    </a>
  );
};

export default NavLink;
