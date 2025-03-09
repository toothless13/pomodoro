import { useRef, useState } from "react";

export const useTimer = (initialTime: number) => {
    const [minutes, setMinutes] = useState(initialTime);
    const [seconds, setSeconds] = useState<string | number>("00");
    const timeRef = useRef<number>(initialTime * 60);
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
        timeRef.current = initialTime * 60;
        setMinutes(initialTime);
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
      timeRef.current = initialTime * 60;
      setMinutes(initialTime);
      setSeconds("00");
    };
  
    const skipTimer = () => {
      clearInterval(timerRef.current!);
      timerRef.current = null;
      timeRef.current = 0;
      setMinutes(0);
      setSeconds("00");
    };
  
    const resetTimer = () => {
      clearInterval(timerRef.current!);
      timerRef.current = null;
      timeRef.current = initialTime * 60;
      setMinutes(initialTime);
      setSeconds("00");
    }

    return { minutes, seconds, startTimer, pauseTimer, stopTimer, skipTimer, resetTimer };
};