import { useState, useRef } from "react";
import { useTimer } from "../../hooks/useTimer";

interface CardProps {
  time: number;
}

const TimerCard: React.FC<CardProps> = ({time}) => {
    // const [minutes, setMinutes] = useState(time);
    // const [seconds, setSeconds] = useState<string | number>("00");
    // const timeRef = useRef<number>(time * 60);
    // const timerRef = useRef<number | null>(null);
  
    // const countDown = () => {
    //   if (timeRef.current <= 0) {
    //     stopTimer();
    //     return;
    //   }
  
    //   timeRef.current--;
    //   const mins = Math.floor(timeRef.current / 60);
    //   let secs: string | number = timeRef.current % 60;
    //   secs = secs < 10 ? `0${secs}` : secs;
  
    //   setMinutes(mins);
    //   setSeconds(secs);
    // };
  
    // const startTimer = () => {
    //   if (timeRef.current === 0) {
    //     timeRef.current = time * 60;
    //     setMinutes(time);
    //     setSeconds("00");
    //   }
    //   if (!timerRef.current) {
    //     timerRef.current = setInterval(countDown, 1000);
    //   }
    // };
  
    // const pauseTimer = () => {
    //   clearInterval(timerRef.current!);
    //   timerRef.current = null;
    // };
  
    // const stopTimer = () => {
    //   clearInterval(timerRef.current!);
    //   timerRef.current = null;
    //   timeRef.current = time * 60;
    //   setMinutes(time);
    //   setSeconds("00");
    // };
  
    // const skipTimer = () => {
    //   clearInterval(timerRef.current!);
    //   timerRef.current = null;
    //   timeRef.current = 0;
    //   setMinutes(0);
    //   setSeconds("00");
    // };
  
    // const resetTimer = () => {
    //   clearInterval(timerRef.current!);
    //   timerRef.current = null;
    //   timeRef.current = time * 60;
    //   setMinutes(time);
    //   setSeconds("00");
    // }

    const { minutes, seconds, startTimer, pauseTimer, stopTimer, skipTimer, resetTimer } = useTimer(time);
  
    return (
      <div className="w-72 border-2 border-black p-2">
        <h2 className="font-bold text-3xl">Timer</h2>
        <p>
          {minutes}:{seconds}
        </p>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={skipTimer}>Skip</button>
        <button onClick={resetTimer}>Reset</button>
        {minutes === 0 && <div>Well done, take a 5 minute break now!</div>}
      </div>
    );
};

export default TimerCard;
