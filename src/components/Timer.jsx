import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = new Date('July 10, 2023 00:00:00').getTime();

    const updateTimer = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = countdownDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (timeDifference < 0) {
        clearInterval(updateTimer);
      }
    }, 1000);

    return () => clearInterval(updateTimer);
  }, []);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <p>{days} days</p>
        <p>{hours} hours</p>
        <p>{minutes} minutes</p>
        <p>{seconds} seconds</p>
      </div>
    </div>
  );
};

export default Timer;
