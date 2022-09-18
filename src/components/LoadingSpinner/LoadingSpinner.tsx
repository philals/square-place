import styles from "./LoadingSpinner.module.css";

export const LoadingSpinner = ({
  numberOfSquares,
}: {
  numberOfSquares: number;
}): JSX.Element => {
  console.log("🚀🚀 ~ numberOfSquares", numberOfSquares);

  return (
    <div className={styles.ldsContainer}>
      <div className={styles.ldsgrid}>
        {Array.from({ length: numberOfSquares }).map((num, i) => (
          <div key={i}></div>
        ))}
      </div>
    </div>
  );
};
