import React, { useEffect, useState } from 'react';
import { memo } from 'react';

const Time = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <p className="date">
      {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`} <br />
      <span>dəqiqə qaldı</span>
    </p>
  );
};

export default memo(Time)
