import { useState, useEffect } from "react";

const Advertisement = () => {
  const [days, setDays] = useState(15);
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(50);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);
        if (minutes > 0) {
          setMinutes(minutes - 1);
        } else {
          setMinutes(59);
          if (hours > 0) {
            setHours(hours - 1);
          } else {
            setHours(23);
            if (days > 0) {
              setDays(days - 1);
            } else {
              clearInterval(timer);
            }
          }
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [days, hours, minutes, seconds]);

  return (
    <div className="advertisement-container bg-cover bg-center bg-no-repeat h-[60vh] md:m-10 md:block" style={{ backgroundImage: 'url("https://i.ibb.co/1fRV8JX/a85c93a1-e850-4a08-aebc-b5f080411c1f-2023-August-22-T18-25-01-3734289-PM.jpg")' }}>
      <div className="md:p-44 p-40">
      <h1 className="font-bold text-2xl md:text-4xl text-white px-10 py-5">Flash Sell!</h1>
      <div className="grid grid-flow-col gap-5 auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": days }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": hours }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": minutes }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ "--value": seconds }}></span>
          </span>
          sec
        </div>
      </div>
      </div>
    </div>
  );
};

export default Advertisement;
