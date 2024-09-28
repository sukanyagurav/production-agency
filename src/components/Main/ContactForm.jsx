import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../UI/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { variants } from "../../constant/animations";
import { motion } from "framer-motion";
const ContactForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const schema = z.object({
    name: z.string().min(2, { message: "Please enter your Name" }),
    company: z.string(),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" })
      .regex(/^\d+$/, { message: "Phone number can contain digits only" }),
    email: z
      .string()
      .email({ message: "Looks like you entered invalid email" }),
    message: z.string().min(2, { message: "Please enter a message" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors,isValid }
  } = useForm({ resolver: zodResolver(schema) });
 

  function submitData(e) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
  const handleChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    setPhoneNumber(inputValue);
  };
  return (
    <motion.div className="  flex flex-col  flex-[0.4] " variants={variants} initial={"initial"} whileInView={"animate"}>
      <motion.h2 className="text-lg font-bold" variants={variants}>
        Give us few details and we’ll get in touch
      </motion.h2>

      <form
        className="flex flex-col  mt-4 gap-4"
        onSubmit={handleSubmit(submitData)}
        autoComplete="off"
      >
        <div>
          <input
            type="text"
            placeholder="Name*"
            className="p-2 border-b-[0.3px] block w-full text-[#525252] border-[#525252] outline-none focus:border-[#EF001C]"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-[#EF001C] mt-2 block">
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Company name"
            {...register("company")}
            className="p-2 border-b-[0.3px] block w-full text-[#525252] border-[#525252] outline-none focus:border-[#EF001C]"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email*"
            className="p-2 border-b-[0.3px] block w-full text-[#525252] border-[#525252] outline-none focus:border-[#EF001C]"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-[#EF001C] mt-2 block">
              {errors.email.message}
            </span>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone no*"
            {...register("phone", { required: true })}
            className="p-2 border-b-[0.3px] block w-full text-[#525252] border-[#525252] outline-none focus:border-[#EF001C]"
            min={1}
            maxLength={10}
            value={phoneNumber}
            onChange={handleChange}
          />
          {errors.phone && (
            <span className="text-[#EF001C] mt-2 block">
              {errors.phone.message}
            </span>
          )}
        </div>
        <div>
          <input
            type="textarea"
            placeholder="Message*"
            className="p-2 border-b-[0.3px] block w-full text-[#525252] border-[#525252] outline-none focus:border-[#EF001C]"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-[#EF001C] mt-2 block">
              {errors.message.message}
            </span>
          )}
        </div>

        <Button
          text="Contact Us "
          icon={<FaArrowRightLong />}
          classes={" font-bold px-6 text-[0.8rem] py-3 justify-center  mt-6"}
        />
        {( isValid) && (
          <p className="text-[#EF001C]">Thanks for completing the form. we'll be in touch soon!</p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;
