import "./App.css";
// Learning Components
// import Calculator from "./learning/components/Calculator";
// import Header from "./learning/components/Header";

// Keeper app components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
function App() {
  return (
    <div className="h-screen overflow-auto bg-slate-100">
      <Header />

      <div className="w-11/12 mx-auto mt-6 grid grid-cols-3 gap-3">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>

      <div className="absolute w-full bottom-0 ">
        <Footer />
      </div>

      {/* Learning components */}
      {/* <Header />
      <Calculator /> */}
    </div>
  );
}

export default App;
