import { useTimer } from "../../hooks/useTimer";
import { TimerCardType } from "../../enums/timer-card.type";
import { EmblaCarouselType } from "embla-carousel";

interface CardProps {
  time: number;
  type: TimerCardType;
  emblaApi?: EmblaCarouselType | undefined
}

export const TimerCard: React.FC<CardProps> = ({ time, type, emblaApi }) => {
  const {
    minutes,
    seconds,
    startTimer,
    pauseTimer,
    stopTimer,
    skipTimer,
    resetTimer,
  } = useTimer(time, emblaApi);

  const getTimerMessage = (type: TimerCardType) => {
    switch (type) {
      case TimerCardType.Work:
        return "Well done, take a break now!";
      case TimerCardType.ShortBreak:
      case TimerCardType.LongBreak:
        return "Time to get back to work!";
    }
  };

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
      {minutes === 0 && seconds === "00" && <div>{getTimerMessage(type)}</div>}
    </div>
  );
};
