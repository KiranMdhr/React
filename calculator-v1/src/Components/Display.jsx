import styles from "./Display.module.css";
const Display = ({ showValue }) => {
  return (
    <input type="text" className={styles.display} value={showValue} readOnly />
  );
};

export default Display;
