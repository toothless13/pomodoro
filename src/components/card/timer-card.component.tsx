import { useTimer } from "../../hooks/useTimer";

interface CardProps {
  time: number;
}

const TimerCard: React.FC<CardProps> = ({ time }) => {
  const {
    minutes,
    seconds,
    startTimer,
    pauseTimer,
    stopTimer,
    skipTimer,
    resetTimer,
  } = useTimer(time);

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
