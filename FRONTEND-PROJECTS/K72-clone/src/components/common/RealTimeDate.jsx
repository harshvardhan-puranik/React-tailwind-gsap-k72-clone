import React, { useEffect, useState } from "react";

const RealTimeDate = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = time.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const clock = time.toLocaleTimeString("en-US");

  return (
    <div className="w-fit max-w-full">
      <div
        className="
        bg-black/60 backdrop-blur-xl 
        border border-white/10 
        rounded-lg shadow-md
        px-1 py-0.75
        xs:px-2 xs:py-1
        sm:px-3 sm:py-2
      "
      >
        <div
          className="
          text-[6px] 
          xs:text-[7px] 
          sm:text-[9px] 
          md:text-xs
          tracking-widest 
          xs:tracking-[0.15em] 
          sm:tracking-[0.2em]
          
          text-white/50 uppercase
          truncate
        "
        >
          {date}
        </div>

        <div
          className="
          text-[10px] 
          xs:text-xs 
          sm:text-sm 
          md:text-lg 
          lg:text-2xl
          font-semibold text-white 
          mt-0.5 
          tracking-tight
          truncate
        "
        >
          {clock}
        </div>
      </div>
    </div>
  );
};

export default RealTimeDate;
