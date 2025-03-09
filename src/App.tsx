import "./styles.css";
import Footer from "./components/footer/footer.component";
import Title from "./components/title/title.component";
import { Carousel } from "./components/carousel/carousel.component";

function App() {
  return (
    <>
      <Title />
      <Carousel />
      <Footer />
    </>
  );
}

export default App;
