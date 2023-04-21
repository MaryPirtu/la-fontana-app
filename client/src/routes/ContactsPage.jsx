import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Contacts from "../components/content/Contacts";

export default function ContactsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Contacts />
      <Footer />
    </div>
  );
}
