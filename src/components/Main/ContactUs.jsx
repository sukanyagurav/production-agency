import React from "react";
import Card from "../../UI/Card";
import ContactForm from "./ContactForm";
import user1 from '/assets/marin.png'
import user2 from '/assets/ayesha.png'
import { motion } from "framer-motion";
import { variants } from "../../constant/animations";

const ContactUs = () => {
  return <div className="bg-[#F1F2F6] mt-[8rem] py-20">
    <Card classes={'flex items-center gap-8 flex-col md:flex-row justify-between'}>
     <motion.div className="flex-[0.5]" variants={variants} initial="initial" whileInView="animate">
      <motion.h2 variants={variants} className=" text-5xl text-center md:text-left  md:w-[300px] uppercase md:leading-[3.5rem] font-bold ">lets start something <span className="text-[#EF001C]">new</span> together</motion.h2> 
      <motion.div variants={variants} className="my-8 flex flex-col md:flex-row">
        <div className="p-4 px-6 border-b-2 md:border-l-2 md:border-b-0 border-[#46484820]">
            <img src={user1} alt="Milly Cyrus"  className="w-14 h-14 rounded-full object-cover mb-4 " />
            <p className="text-sm">All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.</p>
            <span className="block my-2 font-bold text-sm">Milly Cyrus, Global Lead</span>
        </div>
        <div className="p-4 px-6 md:border-l-2 border-[#46484820]">
            <img src={user2} alt="Vinita Singh"  className="w-14 h-14 rounded-full object-cover mb-4"/>
            <p className="text-sm">All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.</p>

            <span className="block my-2 font-bold text-sm">Vinita Singh, Asst. Global Lead</span>
        </div>
      </motion.div>
     </motion.div>
     <ContactForm/>
    </Card>
  </div>;
};

export default ContactUs;
