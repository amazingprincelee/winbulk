import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Updated countdown date and time - Wed Aug 16 2023 17:37:02 GMT+0000
    const countdownDate = new Date('August 16, 2023 17:37:02 GMT+0000').getTime();

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
        <h6 className='timer-label'>PancakeSwap Listing</h6>
        <div className='col time-case'>{days} <p>DAY</p></div>
        <div className='col time-case'>{hours} <p>HOUR</p></div>
        <div className='col time-case'>{minutes} <p>MINUTES</p></div>
        <div className='col time-case'>{seconds} <p>SECONDS</p></div>
      </div>
    </div>
  );
};

export default Timer;
