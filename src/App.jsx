import "./App.css";
// Learning Components
// import Calculator from "./learning/components/Calculator";
// import Header from "./learning/components/Header";
// import Card from "./learning/components/contact-list/card";
// import contactList from "./learning/utils/contscts";
// import EmojiPediaApp from "./learning/components/emojiApp/Main";
import Login from "./learning/components/loginApp/Login";

// Keeper app components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./components/notes";
function App() {
  {
    /* <div className="w-11/12 mx-auto mt-6 grid grid-cols-3 gap-3"> */
  }
  return (
    // <div className="h-screen overflow-auto bg-slate-100">
    //   <Header />

    //   <div className="w-11/12 mx-auto mt-6 flex justify-evenly flex-wrap gap-3">
    //     {notes.map((note) => (
    //       <Note key={note.key} title={note.title} content={note.content} />
    //     ))}
    //   </div>

    //   <div className="absolute w-full bottom-0 ">
    //     <Footer />
    //   </div>
    // </div>
    <Login />
  );
}

{
  /* Learning components */
}
{
  /* <Header />
      <Calculator /> */
}
{
  /* <div className="flex justify-evenly items-center gap-4 flex-wrap">
        {contactList.map((person) => (
          <Card
            key={person.id}
            name={person.name}
            image={person.image}
            phone={person.phone}
            email={person.email}
          />
        ))}
      </div> */
}

{
  /* <div className="w-11/12 mx-auto my-4">
        <EmojiPediaApp />
      </div> */
}

export default App;
