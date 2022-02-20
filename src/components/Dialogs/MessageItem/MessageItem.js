import styles from "./MessageItem.module.css";

const MessageItem = (props) => <div className={styles.message}>{props.message}</div>

export default MessageItem;
