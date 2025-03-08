import { useRef, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState<string | number>("00");
  const timeRef = useRef<number>(25 * 60);
  const timerRef = useRef<number | null>(null);

  const countDown = () => {
    if (timeRef.current <= 0) {
      stopTimer();
      return;
    }

    timeRef.current--;
    const mins = Math.floor(timeRef.current / 60);
    let secs: string | number = timeRef.current % 60;
    secs = secs < 10 ? `0${secs}` : secs;

    setMinutes(mins);
    setSeconds(secs);
    console.log(`${mins}:${secs}`);
  }

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(countDown, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current!);
    timerRef.current = null;
  };

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
