import "./styles.css";
import Footer from "./components/footer/footer.component";
import Title from "./components/title/title.component";
import TimerCard from "./components/card/timer-card.component";

function App() {
  return (
    <>
      <Title />
      <TimerCard time={25} />
      <TimerCard time={5} />
      <TimerCard time={25} />
      <TimerCard time={5} />
      <TimerCard time={25} />
      <TimerCard time={5} />
      <TimerCard time={25} />
      <TimerCard time={30} />
      <Footer />
    </>
  );
}

export default App;
