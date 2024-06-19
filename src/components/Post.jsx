const Post = (props) => {
  props.author;
  props.body;
  return (
    <div>
      <p>{props.author}</p>
      <p>{props.body}</p>
    </div>
  );
};

export default Post;
