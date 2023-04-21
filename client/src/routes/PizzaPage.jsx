import { useEffect } from "react";

import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Pizza from "../components/content/Pizza";

export default function PizzaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Pizza />
      <Footer />
    </div>
  );
}
