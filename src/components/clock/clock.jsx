import { useEffect, useState } from "react";
import "./clock.css";
import { HoursHand, MinutesHand, SecondsHand } from "./clock-hands";

const format = (value) => {
  return value.toString().padStart(2, "0");
};

const getTime = () => {
  const now = new Date();

  return {
    hour: format(now.getHours() % 12 || 12),
    minutes: format(now.getMinutes()),
    seconds: format(now.getSeconds())
  };
};

const Clock = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="clock-container">
        <HoursHand value={time.hour} />
        <MinutesHand value={time.minutes} />
        <SecondsHand value={time.seconds} />
        <div className="clock-center-point" />
      </div>
      <p>
        {time.hour} : {time.minutes} : {time.seconds}
      </p>
    </>
  );
};

export default Clock;
