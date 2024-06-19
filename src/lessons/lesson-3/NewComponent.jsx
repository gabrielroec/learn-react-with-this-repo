import React from "react";

const SimpleForm = () => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <input type="text" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
