import React, { useState } from "react";
import Card from "../../UI/Card";
import Heading2 from "../../UI/Heading2";
import { testimonials } from "../../constant";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrevious(){
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }
  function handleNext(){
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }
  return (
    <Card classes="mb-[8rem]">
      <Heading2 classes="text-lg">Testimony from our partners</Heading2>
      <div className="w-full h-full flex  overflow-hidden mt-8">
        
        {testimonials.map((testimonial,i) => (
          <div className={` w-full h-full gap-9 grid grid-cols-1 overflow-hidden transition-all durartion-100  lg:grid-cols-[450px_1fr] shrink-0 grow-0 `} 
          style={{ translate: `${-100 * (currentIndex)}%`,}}
           key={i}>
            <div>
              <img
                src={testimonial.userImage}
                alt={testimonial.userName}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-[1.1rem] font-[600]">{testimonial.description}</p>

              <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
                <div>
                  <p className="mt-8">
                    <span className="font-bold text-xl uppercase">{testimonial.userName}, </span>
                    <span className="text-md">{testimonial.companyName}</span>
                  </p>
                  <span className="text-[0.9rem] uppercase text-[#111010]">{testimonial.profession}</span>
                </div>
                <div className="mt-4 md:mt-12">
                  <button onClick={handlePrevious} className="p-4 py-2 border-2 border-black rounded-full mr-2 transition duration-400 hover:bg-[#EF001C] hover:border-transparent hover:text-white">
                  <LuMoveLeft />

                  </button>
                  <button onClick={handleNext} className="p-4 py-2 border-2 border-black rounded-full transition duration-300 hover:bg-[#EF001C] hover:border-transparent hover:text-white">
                  <LuMoveRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Testimonials;


