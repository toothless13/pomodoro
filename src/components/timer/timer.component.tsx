import { useRef, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState<string | number>("00");
  const [time, setTime] = useState<number>(25 * 60);

  const countDown = () => {
    setTime((prevTime) => {
      const newTime = prevTime - 1;
      const minutes = Math.floor(newTime / 60);
      setMinutes(minutes);

      let seconds: string | number = newTime % 60;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      setSeconds(seconds);

      console.log(`${minutes}:${seconds}`);

      return newTime;
    });
  };

  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(countDown, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current!);
    timerRef.current = null;
  }

  return (
    <div>
      <h2 className="font-bold text-3xl">Timer</h2>
      <p>
        {minutes}: {seconds}
      </p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
