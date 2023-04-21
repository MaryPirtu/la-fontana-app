import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Slide from "./components/slide/Slide";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Slide />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
