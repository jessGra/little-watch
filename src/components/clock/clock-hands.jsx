import { useEffect, useState } from "react";
import { CLOCK_HANDS } from "../../enums";

const Hand = ({ value, length, type }) => {
  const rotation = (value * 360) / (type === CLOCK_HANDS.HOURS ? 12 : 60);

  return (
    <div className={`clock-hand ${type}`} style={{ transform: `rotate(${rotation}deg)` }}>
      {Array.from({ length }).map((_, i) => (
        <span key={`hand-text-${i}`}>{value}</span>
      ))}
    </div>
  );
};

const HoursHand = ({ value }) => <Hand value={value} length={5} type={CLOCK_HANDS.HOURS} />;
const MinutesHand = ({ value }) => <Hand value={value} length={7} type={CLOCK_HANDS.MINUTES} />;
const SecondsHand = ({ value }) => <Hand value={value} length={12} type={CLOCK_HANDS.SECONDS} />;

export { HoursHand, MinutesHand, SecondsHand };
