import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [text, settext] = useState([]);
  function addit(note) {
    settext((prev) => {
      return [...prev, note];
    });
  }
  function deletenote(id) {
    settext((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }
  // console.log(text)

  return (
    <div>
      <Header />
      <CreateArea addit={addit} />
      {text.map((object, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={object.title}
            content={object.desc}
            deletenote={deletenote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
