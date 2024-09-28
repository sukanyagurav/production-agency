import React, { useState } from "react";
import Card from "../../UI/Card";
import { services } from "../../constant";
import { motion } from "framer-motion";
import { clipPathVariant, fromLeft, staggerContainer } from "../../constant/animations";

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <Card>
      <motion.section  variants={staggerContainer}  className="my-[5rem] overflow-hidden" initial="hidden" whileInView="show" viewport={{once:false, amount:0.25}}>
        <motion.h2
          className="text-4xl font-bold"
          variants={clipPathVariant()}
        >
          Our expertise and passion
          <br /> breathe life into your narratives
        </motion.h2>
        <div className="flex gap-10 my-[3rem] flex-col md:flex-row">
          <motion.img
            loading="lazy"
            variants={fromLeft('right')}
            src={services[activeSlide].imgageSource}
            alt={services[activeSlide].title}
            className="w-full md:max-w-[400px] block h-[450px] object-cover flex-[0.5]"
          />
          <motion.div className="flex-[0.5] flex flex-col my-6 md:my-12"  variants={fromLeft('left')}>
            {services.map((service) => (
              <div
                key={service.title}
                className="border-t-2 py-3 px-2   border-t-gray-300  text-gray-400 last-of-type:border-b-gray-300 last-of-type:border-b-2"
              >
                {activeSlide + 1 === service.id && (
                  <p className={`text-[#EF001C] font-bold text-xl `}>
                    {service.id.toString().padStart(2, 0)}
                  </p>
                )}
                <button
                  onClick={(e) => setActiveSlide(e.target.id - 1)}
                  id={service.id}
                  className={` text-left text-lg font-semibold  tabButton ${
                    activeSlide + 1 === service.id
                      ? "text-black !text-2xl font-bold"
                      : ""
                  }`}
                >
                  {service.title}
                </button>

                <p
                  className={`transition-all duration-200 my-2 ${
                    activeSlide + 1 === service.id
                      ? "opacity-100 "
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {activeSlide + 1 === service.id && service.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </Card>
  );
};

export default Services;
