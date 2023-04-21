import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Cart from "../components/content/Cart";

export default function CartPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Cart />
      <Footer />
    </div>
  );
}
