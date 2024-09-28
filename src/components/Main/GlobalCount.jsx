import React from "react";
import Card from "../../UI/Card";
import { stats } from "../../constant";
import Heading2 from "../../UI/Heading2";
import { motion } from "framer-motion";
import { variants } from "../../constant/animations";

const GlobalCountStats = ({ statsValue, text }) => {
  return (
    <motion.div
      className="md:group-nth-before  flex flex-col p-2  relative"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <span className="text-7xl font-semibold">
        <span>{statsValue}</span>
        <span className="text-[#EF001C] text-6xl">+</span>
      </span>
      <span className="text-md block mt-2 w-[140px] font-[500]">{text}</span>
    </motion.div>
  );
};
const GlobalCount = () => {
  return (
    <Card classes={"my-[8rem]"}>
      <Heading2>We are global</Heading2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center md:justify-items-stretch text-center md:text-justify">
        {stats.map((stat, i) => (
          <GlobalCountStats statsValue={stat.value} text={stat.title} key={i} />
        ))}
      </div>
    </Card>
  );
};

export default GlobalCount;
