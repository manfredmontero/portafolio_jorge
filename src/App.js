import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Information from "./components/Information";
import Footer from "./components/Footer";
import back from "../src/images/puzzlebackground.jpeg";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${back})`, backgroundRepeat: "no-repeat" , backgroundPosition: "center", backgroundSize: "cover"}}
    >
      <Header />
      <Information />
      <Footer />
    </div>
  );
}

export default App;
