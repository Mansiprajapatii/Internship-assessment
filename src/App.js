import "./App.css";
import Navbar from "./components/Navbar";
import Heroes from "./components/Heroes";
import Footer from "./components/Footer";
import Containers from "./components/Containers";
import OtherDetailsCard from "./components/OtherDetailsCard";
import InquiryForm from "./components/InquiryForm";
function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <div className="px-5 sm:px-60">
        <Heroes />

        <div className=" grid grid-cols-1 mt-1">
          <Containers />
          <Containers />
          <Containers />
        </div>

        <div>
          <OtherDetailsCard />
        </div>

        <div>
          <InquiryForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
