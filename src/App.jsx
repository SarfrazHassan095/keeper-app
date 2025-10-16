import "./App.css";
// Learning Components
// import Calculator from "./learning/components/Calculator";
// import Header from "./learning/components/Header";
// import Card from "./learning/components/contact-list/card";
// import contactList from "./learning/utils/contscts";
// import EmojiPediaApp from "./learning/components/emojiApp/Main";
// import Login from "./learning/components/loginApp/Login";

// Keeper app components
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import initialNotes from "./components/notes";
function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("title", title);
    console.log("content", content);

    if (!title || !content) return alert("Please enter title and content");
    if (title && content) {
      setNotes([...notes, { key: notes.length + 1, title, content }]);

      console.log("notes array, ", notes);
      setTitle("");
      setContent("");
    }
  };
  {
    /* <div className="w-11/12 mx-auto mt-6 grid grid-cols-3 gap-3"> */
  }
  return (
    <div className="h-screen overflow-auto bg-slate-100">
      <Header />

      <form
        className="relative w-1/2 lg:w-1/3 mx-auto bg-white p-5 rounded-md my-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full h-10 px-2 font-semibold shadow-md rounded-md mb-3 focus:outline-yellow-500 focus:outline-2"
        />
        <textarea
          name=""
          id=""
          placeholder="Content"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 font-light shadow-md rounded-md focus:outline-yellow-500 focus:outline-2"
        ></textarea>
        <button
          type="submit"
          className="absolute right-3 -bottom-5 h-10 w-10 rounded-full  bg-yellow-500 text-white flex justify-center items-center"
        >
          Add
        </button>
      </form>

      <div className="w-11/12 mx-auto mt-6 flex justify-evenly flex-wrap gap-3">
        {notes.map((note) => (
          <Note key={note.key} title={note.title} content={note.content} />
        ))}
      </div>

      <div className="absolute w-full bottom-0 ">
        <Footer />
      </div>
    </div>
  );
}

{
  /* Learning components */
}
{
  /* <Login /> */
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
