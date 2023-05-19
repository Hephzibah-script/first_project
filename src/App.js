import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import Hostel from "./components/layout/Hostel";
import Lodge from "./components/layout/Lodge";
import Footer from "./components/layout/Footer";
import TripDetails from "./components/layout/TripDetails";
import NotFound from "./components/layout/NotFound";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/lodge" element={<Lodge />} />
          <Route path="/trips/:id" element={<TripDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
