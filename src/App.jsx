import "./App.css";
// Learning Components
// import Calculator from "./learning/components/Calculator";
// import Header from "./learning/components/Header";

// Keeper app components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Card from "./learning/components/contact-list/card";
function App() {
  return (
    <div className="h-screen overflow-auto bg-slate-100">
      <Header />

      {/* <div className="w-11/12 mx-auto mt-6 grid grid-cols-3 gap-3"> */}
      <div className="w-11/12 mx-auto mt-6 flex justify-start gap-3">
        <Note
          title={"title one"}
          content={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus corporis ea iusto nihil sit nobis expedita, dolorum minus facilis."
          }
        />
      </div>

      <div className="absolute w-full bottom-0 ">
        <Footer />
      </div>

      {/* Learning components */}
      {/* <Header />
      <Calculator /> */}
      {/* <Card
        name="Sarfraz Hassan"
        image={
          "https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg"
        }
        phone={"123 456 7890"}
        email={"test@mail.com"}
      /> */}
    </div>
  );
}

export default App;
