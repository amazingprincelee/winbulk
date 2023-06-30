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
      <div className='row timer-row'>
        <h6 className='timer-label'>WBUK SALES TO BEGIN IN</h6>
        <p className='col time-case'>{days} D</p>
        <p className='col time-case'>{hours} H</p>
        <p className='col time-case'>{minutes} M</p>
        <p className='col time-case'>{seconds} S</p>
      </div>
    </div>
  );
};

export default Timer;
