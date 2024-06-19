import classes from "./Post.module.css";
const PostStyled = ({ author, body }) => {
  return (
    <div className={classes.post}>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  );
};

export default PostStyled;
