import Timer from "../timer/timer.component";

interface CardProps {
  time: number;
}

const Card: React.FC<CardProps> = ({time}) => {
  return <div className="w-72 border-2 border-black p-2">
    This is a timer card
    <Timer timer={time} />
    </div>;
};

export default Card;
