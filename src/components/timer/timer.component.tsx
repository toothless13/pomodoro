import { useRef, useState } from "react";

interface TimerProps {
  timer: number;
}

const Timer: React.FC<TimerProps> = ({timer}) => {
  const [minutes, setMinutes] = useState(timer);
  const [seconds, setSeconds] = useState<string | number>("00");
  const timeRef = useRef<number>(timer * 60);
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
  };

  const startTimer = () => {
    if (timeRef.current === 0) {
      timeRef.current = timer * 60;
      setMinutes(timer);
      setSeconds("00");
    }
    if (!timerRef.current) {
      timerRef.current = setInterval(countDown, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current!);
    timerRef.current = null;
  };

  const stopTimer = () => {
    clearInterval(timerRef.current!);
    timerRef.current = null;
    timeRef.current = timer * 60;
    setMinutes(timer);
    setSeconds("00");
  };

  const skipTimer = () => {
    clearInterval(timerRef.current!);
    timerRef.current = null;
    timeRef.current = 0;
    setMinutes(0);
    setSeconds("00");
  };

  return (
    <div>
      <h2 className="font-bold text-3xl">Timer</h2>
      <p>
        {minutes} : {seconds}
      </p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={skipTimer}>Skip</button>
      {timeRef.current === 0 && <div>Well done, take a 5 minute break now!</div>}
    </div>
  );
};

export default Timer;
