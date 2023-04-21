import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Login from "../components/content/Login";
import Navigation from "../components/navigation/Navigation";

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Login />
      <Footer />
    </div>
  );
}
