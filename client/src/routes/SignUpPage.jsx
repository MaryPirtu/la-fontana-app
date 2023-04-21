import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import SignUp from "../components/content/SignUp";

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <SignUp />
      <Footer />
    </div>
  );
}
