import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../UI/Button";
import user1 from "/assets/marin.png";
import user2 from "/assets/ayesha.png";
import showReel from "/assets/showReel.png";
import { CiPlay1 } from "react-icons/ci";
import Card from "../../UI/Card";
import Marquee from "../../UI/Marquee";
import { companies_logos } from "../../constant";
import {motion} from 'framer-motion'
import { fromLeft, staggerContainer,textVariant } from "../../constant/animations";

const Hero = () => {
  return (
    <Card classes={"my-10 px-5 my-10"} >
      <motion.section variants={staggerContainer} className="overflow-hidden" initial="hidden" whileInView="show" viewport={{once:false, amount:0.25}}>
        <motion.h1 variants={textVariant(0)} className="text-[2.5rem] text-center  md:text-left md:text-7xl md:leading-[6rem]	 uppercase">
          we are a <br />
          global <span className="text-[#EF001C]">production</span> <br />
          agency
        </motion.h1>
        <motion.div variants={fromLeft('left')} className="flex justify-between pt-6 flex-wrap mx-auto md:mx-0 gap-10">
          <div className="w-full md:max-w-[550px] ">
            <p className="font-semibold text-center md:text-left">
              Designed with the specific needs of large B2B enterprises in mind,
              our platform offers a comprehensive solution to simplify.
            </p>
            <div className="mt-7 flex flex-col justify-center  gap-4 items-center md:justify-start  md:flex-row">
              <div className="flex  items-center gap-2 md:order-2">
                <div className="flex items-center">
                  <img
                    src={user1}
                    alt="Marin"
                    className="w-[40px] h-[40px]  object-cover rounded-full relative -right-4"
                  />
                  <img
                    src={user2}
                    alt="Ayesha"
                    className="w-[40px] h-[40px] object-cover rounded-full  "
                  />
                </div>
                <div className="text-[0.75rem]">
                  <h5 className="font-bold text-[#111010]">Marin / Ayesha</h5>
                  <span className="text-[#11101099] font-bold">
                    Global Services
                  </span>
                </div>
              </div>

              <Button
                text="get professsional video services "
                icon={<FaArrowRightLong />}
                classes={" font-bold px-6 py-3   md:order-1"}
              />
            </div>
          </div>
          <div className=" mx-auto md:mx-0 self-end relative ">
            <img
              src={showReel}
              alt=""
              className="block ml-auto w-[256px] rounded-xl h-[120px] shadow-2xl"
            />

            <button className="bg-[#d6cdc2d7] text-center py-2 px-5 rounded-full text-white absolute top-[40%] left-[25%] text-[0.8rem] flex items-center gap-2">
              <CiPlay1 />
              Play Showreel
            </button>
          </div>
        </motion.div>
      </motion.section>
      <Marquee styles={{ '--width': '140px', '--height': '100px','--quantity':companies_logos.length, 'marginTop' : '7rem' }} >
          <div className="flex items-center w-full min-w-[calc(var(--width)*var(--quantity))] relative ">
            {companies_logos.map((company,i)=>(
              <div className="item absolute left-[100%]" key={i} style={{'--position':i+1,'--width':'110px'}}>
                <img src={company.imageSrc} alt={company.name}  className="object-contain w-full h-full"/>
              </div>
            ))}
          </div>
      </Marquee>
    </Card>
  );
};

export default Hero;
