import Modal from "./components/Modal";
import "./App.css";
import Characters from "./components/Characters";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Characters />
      <Modal />
    </div>
  );
}

export default App;
