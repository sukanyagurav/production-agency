import React from "react";
import Marquee from "../../UI/Marquee";

const CTA = () => {
  return (
    <div className="bg-black mb-8 px-8 ">
      <Marquee
        styles={{ "--width": "400px", "--height": "19vh", "--quantity": 2 }}
      >
        <div className="flex items-center justify-center w-full  relative ">
          <h5
            className="text-white text-center text-3xl md:text-5xl uppercase tracking-widest px-2	 item absolute left-[100%] after:bg-slate-200 after:w-[1px] after:h-full after:border-2 after:absolute after:right-0 after:top-0  "
            style={{ "--position": 1, "--width": "100%" }}
          >
            Unleash Visual Impact
          </h5>
          <h5
            className="text-white text-center text-3xl md:text-5xl uppercase tracking-widest px-2 item absolute left-[100%] after:bg-slate-200 after:w-[1px] after:h-full after:border-2 after:absolute after:right-0 after:top-0 "
            style={{ "--position": 2, "--width": "100%" }}
          >
            Unleash Visual Impact
          </h5>
        </div>
      </Marquee>
    </div>
  );
};

export default CTA;
