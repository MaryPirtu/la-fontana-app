import { useEffect } from "react";
import Shop from "../components/content/Shop";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Shop />
      <Footer />
    </div>
  );
}
