import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner = () => {
  return (
    <div className={styles.ldsContainer}>
      <div className={styles.ldsgrid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
