## Lifting State Up

### Introduction to Lifting State Up

"Lifting State Up" refers to the practice of moving shared state between child components to their nearest parent component so that components can share data through props and maintain a synchronized state.

### Example

### 1. Component SimpleForm

```bash
const SimpleForm = (props) => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Author"
          onChange={props.onAuthorChange}
        />
        <input
          placeholder="Body text"
          type="text"
          onChange={props.onBodyChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SimpleForm;


```

Purpose: SimpleForm is a functional component that renders a form with two input fields (Author and Body text) and a submit button.

Props: It receives two functions via props (onAuthorChange and onBodyChange), which are defined in the parent component (App).

### 2. Component App

```bash

import "./App.css";
import { useState } from "react";
import NewForm from "./lessons/lesson-5/NewForm/NewForm";
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



```

State (useState): In App, two local states (enteredBody and enteredAuthor) are defined using the useState hook. They store the values entered in the form fields.

Handlers (bodyChangeHandler and authorChangeHandler): These functions update the enteredBody and enteredAuthor states whenever the content of the inputs in SimpleForm (via NewForm) changes.

### 3. Component Post

```bash
import styles from "./Post.module.css";

const Post = ({ author, body }) => {
  return (
    <li className={styles.post_card}>
      <p>{author}</p>
      <p>{body}</p>
    </li>
  );
};

export default Post;


```

Props: Post receives two props (author and body), which are used to display the author and the content of the post inside an <li> element.

### How "Lifting State Up" is Applied

Centralization of State: The state of enteredBody and enteredAuthor fields is centralized in the App component. This means that the state defining what is typed into the form fields is located in a single place.

Passing Functions via Props: In the App component, the functions bodyChangeHandler and authorChangeHandler are passed as props to the NewForm component. This allows the SimpleForm (NewForm) component to notify the App component whenever the form fields change.

Data Propagation: When a user types into the form fields (SimpleForm), the onBodyChange and onAuthorChange functions are triggered, updating the enteredBody and enteredAuthor states in App. These states are then passed as props to the Post components, which use them to render the content of the posts in the <ul> list.

Benefits of "Lifting State Up"
Simplicity and Clarity: By keeping shared state in the App component, the code becomes easier to understand and maintain.

Reuse: The Post components can easily be reused to display multiple posts, with data coming from different sources, while maintaining a single source of truth (the state in App).

Centralized State Management: Facilitates managing how state is changed and propagated throughout the application, providing a clear view of how data flows and is manipulated.

This "Lifting State Up" approach is fundamental in React for creating reusable components and maintaining an organized and easily maintainable code structure.
