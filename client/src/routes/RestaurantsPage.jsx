import { useEffect } from "react";
import ShowRestaurants from "../components/content/ShowRestaurants";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Navigation />
      <ShowRestaurants />
      <Footer />
    </div>
  );
}
