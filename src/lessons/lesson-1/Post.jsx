const Post = ({ author, body }) => {
  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
};

export default Post;
