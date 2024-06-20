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
