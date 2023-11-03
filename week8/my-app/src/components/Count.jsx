import { useState } from "react";
import styles from "./Count.module.css";

export const Count = ({ count, setCount }) => {
  return (
    <button
      className={styles.count}
      onClick={() => {
        const newCount = count + 1;
        setCount(newCount);
        console.log(newCount);
      }}
    >
      {count}
    </button>
  );
};
