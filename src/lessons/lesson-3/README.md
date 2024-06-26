## Adding Event Listeners

### Example

### Step 1: Create a Component

First, create a new component where you want to add an event listener. For this example, let's create a component called `NewComponent`.

**Example: Post.module.css**

```bash

const SimpleForm = () => {


  return (
    <form>
      <input type="text"/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;

```

### Step 2: Adding onChange to the Input

To capture user input, we need to add an onChange event to the input field (<input>).

```bash



const SimpleForm = () => {


  return (
    <form>
      <input type="text" onChange={} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;


```

### Step 3: Creating the handleInputChange Function

- handleInputChange: This function is called whenever the input field's value changes (i.e., when the user types something). It logs the current value of the input field to the console

```bash


const SimpleForm = () => {
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <input type="text" onChange={} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;




```

### Step 4: Using onChange in the Component

- onChange: The onChange property of the <input> is set to call the handleInputChange function whenever the input field's content changes. This allows the component to capture and react to user input changes dynamically.

```bash


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



```

Now, the SimpleForm component is set up to capture and log user input whenever the user types something into the text field. This basic example demonstrates how to add interactivity to your React components using the onChange event.
