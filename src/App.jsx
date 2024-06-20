import "./App.css";
import { useState } from "react";
import NewForm from "./lessons/lesson-5/NewForm/SimpleForm";
import Post from "./lessons/lesson-5/Posts/Post";
function App() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  return (
    <>
      <NewForm
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Gabriel Roec" body="Lorem Ipsum" />
      </ul>
    </>
  );
}

export default App;
