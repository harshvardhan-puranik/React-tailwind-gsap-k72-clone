import React, { useEffect, useState } from 'react';

const RealTimeDate = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = time.toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const clock = time.toLocaleTimeString('en-US');

  return (
    <div className="fixed bottom-6 left-6">
      <div className="bg-black/70 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-xl shadow-lg">
        
        <div className="text-xs tracking-[0.25em] text-white/50 uppercase">
          {date}
        </div>

        <div className="text-2xl font-semibold text-white mt-1 tracking-wide">
          {clock}
        </div>

      </div>
    </div>
  );
};

export default RealTimeDate;