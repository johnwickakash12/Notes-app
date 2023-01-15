import React, { useState } from "react";

function CreateArea(props) {
  const [text, settext] = useState({
    title: "",
    desc: ""
  });
  function handleclick(event) {
    const { name, value } = event.target;
    settext((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleclick}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          onChange={handleclick}
          name="desc"
          placeholder="Take a note..."
          value={text.desc}
          rows="3"
        />
        <button
          onClick={(event) => {
            props.addit(text);
            settext({
              title: "",
              desc: ""
            });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
