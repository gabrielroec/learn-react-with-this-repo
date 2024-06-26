## Working with State in ReactJS

### Introduction to State

In ReactJS, state refers to the data that a component manages and can change over time. State allows components to store information locally and update it as needed, which in turn updates the user interface to reflect those changes. This is essential for building dynamic and interactive web applications.

### Using the useState Hook

React provides a built-in hook called useState that enables functional components to manage state. Let's walk through how to use useState step-by-step:

### Example

### Step 1: Initializing State

To use state in a functional component, you first import the useState hook from the React library.

```bash

import{ useState } from 'react';


```

### Step 2: Declaring State Variables

Next, you declare a state variable and its setter function within your component. This is achieved using array destructuring with useState.

```bash


const [count, setCount] = useState(0);



```

- count: This variable holds the current value of the state.
- setCount: This function is used to update the count state. When called with a new value, it triggers a re-render of the component with the updated state.

### Step 3: Updating State

You can update the state variable (count in this example) using its corresponding setter function (setCount). Typically, this update occurs in response to user interactions, such as clicking a button.

```bash
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button>


```

- onClick: Attaches an event listener to the button. When clicked, it calls setCount with the updated value of count (count + 1 for Increment and count - 1 for Decrement).

### Step 4: Displaying State

Finally, you can display the state value (count in this case) within your component's JSX to reflect its current value.

```bash

<p>Count: {count}</p>




```

## Benefits of Using State

- Dynamic Updates: State allows components to reactively update their UI based on changes in data.
- Encapsulation: Each component manages its own state independently, promoting modular and reusable code.
- Simplicity: Functional components coupled with hooks like useState offer a straightforward and concise approach to managing state compared to class components.

**PRATICE USING THE CODE EXAMPLE IN THE**
[NewComponent.jsx](https://github.com/gabrielroec/learn-react-with-this-repo/blob/main/src/lessons/lesson-4/NewComponent.jsx)
