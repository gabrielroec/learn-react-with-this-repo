## Styling with CSS Modules

### Example

**First Way**

### Step 1: Creating the CSS Module File

Firstly, create a CSS Module file for your component. This file will contain specific styles for your component, avoiding conflicts with styles from other components or the entire application.

The Css Module File can be created in the same folder as the component.

**Example: Post.module.css**

```bash
.post {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px; /* Adding bottom margin for spacing between posts */
}

```

### Step 2: Importing the CSS Module in the Component

Inside your React component file (Post.js, for example), import the CSS Module you created earlier.

**Example: Post.js**

```bash
import React from 'react';
import styles from './Post.module.css'; // Importing the CSS Module

const Post = (props) => {
  return (
    <div className={styles.post}> {/* Applying the CSS Module class */}
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default Post;


```

### Step 3: Using the Styled Component

Now, you can use the styled Post component anywhere in your React application, passing necessary properties like author and body.

**Example: App.js**

```bash
import React from 'react';
import Post from './components/Post'; // Importing the Post component

function App() {
  return (
    <div className="App">
      <h1>My Posts</h1>
      <Post
        author="Gabriel Roec"
        body="Learn how to style components using module.css!"
      />
      <Post
        author="Maria Silva"
        body="React is amazing! I'm loving learning it."
      />
    </div>
  );
}

export default App;



```

## Why Use module.css?

- Local Scope: CSS Module applies styles only to the specific component, avoiding conflicts with other styles in the application.

- Readability and Maintenance: Each component has its own styles file, making the code more readable and easier to maintain.

- Reuse: Styles can be reused in an isolated manner, improving code modularity.

By following these simple steps, you can effectively style React components in an organized and efficient manner using module.css!
