import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Delivery from "../components/navigation/Delivery";
import Navigation from "../components/navigation/Navigation";

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Delivery />
      <Footer />
    </div>
  );
}
