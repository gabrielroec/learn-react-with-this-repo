## Passing Data to Components with Props

### Example

**First Way - most popular: Using Destructuring**

One of the common and preferred ways to pass data to your component is by using destructuring in the function parameters. Here’s how you can do it:

```bash
const Post = ({ author, body }) => {
  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
```

- { author, body } within the parentheses of Post function destructures the props object.
- You can directly use author and body inside of your tag.

and now you can call for your component in other file passing the props inside your component tag:

```bash
import Post from "./components/Post";
function App() {
  return (
    <>
      <Post
        author="Gabriel Roec"
        body="How to passing data to components with props"
      />
    </>
  );
}

export default App;

```

**First Way - most popular: Using Destructuring**

- Clarity: Destructuring makes it clear which props your component expects, improving readability.
- Simplicity: Directly accessing props (author and body) is concise and reduces verbosity.
- Error Avoidance: Helps avoid errors when accessing nested props by ensuring direct access to expected props.

By utilizing destructuring in your component function parameters, you streamline your code and make it more intuitive when passing and using props in React components.
