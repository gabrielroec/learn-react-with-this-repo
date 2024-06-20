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
