import "./styles.css";
import Footer from "./components/footer/footer.component";
import Title from "./components/title/title.component";
import Card from "./components/card/card.component";

function App() {
  return (
    <>
      <Title />
      <Card time={25} />
      <Card time={5} />
      <Footer />
    </>
  );
}

export default App;
