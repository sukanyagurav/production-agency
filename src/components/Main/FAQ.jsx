import React, { useState } from "react";
import Card from "../../UI/Card";
import { FAQs } from "../../constant";
import { FaAngleDown } from "react-icons/fa6";

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <Card classes={"flex gap-4 flex-col md:flex-row"}>
      <h2 className="text-4xl flex-[0.4] md:max-w-[400px] font-bold ">
        Frequently asked questions
      </h2>
      <div className="flex-[0.6]">
        {FAQs.map((faq, i) => (
          <div key={i}>
            <button
              className="flex justify-between items-center gap-4 w-full text-[1rem] font-bold  text-left py-4  border-b-2 border-gray-200 "
              onClick={() => toggleFAQ(i)}
            >
              {faq.question} <FaAngleDown />
            </button>
            <p
              className={`flex-col  flex justify-between gap-[1rem] mt-3 overflow-hidden relative ease-in-out transition-all duration-1000 md:flex-row ${
                openFAQ === i ?"max-h-[90px] " : "max-h-0"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FAQ;
