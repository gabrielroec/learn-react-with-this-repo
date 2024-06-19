import { useState } from "react";

const SimpleForm = () => {
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <form>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>

      <div>
        <p>{text}</p>
      </div>
    </>
  );
};

export default SimpleForm;
