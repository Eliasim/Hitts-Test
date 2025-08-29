import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date(new Date().getFullYear(), 11, 31, 0, 0, 0);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 my-10">
      <Circle value={timeLeft.days} label="DÍAS" />
      <Circle value={timeLeft.hours} label="HRS" />
      <Circle value={timeLeft.minutes} label="MIN" />
      <Circle value={timeLeft.seconds} label="SEG" />
    </div>
  );
}

function Circle({ value, label }) {
  const formattedValue = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 rounded-full bg-transparent border-3 border-white flex flex-col items-center justify-center text-white text-4xl font-bold shadow-lg">
        {formattedValue}
        <span className="text-2xl text-white font-bold">{label}</span>
      </div>
    </div>
  );
}
