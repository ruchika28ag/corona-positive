import React from "react";
import styles from "./newscard.module.css";

const NewsCard = ({ title, thumbnail, url }) => {
  const truncti = title.length > 120 ? title.substring(0, 120) + "..." : title;
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" className={styles.link}>
      <div className={styles.card}>
        <div className={styles.thumbnail} style={{ backgroundImage: `url(${thumbnail})` }} />
        <div className={styles.text}>
          <h2 className={styles.title}>{truncti}</h2>
          <p className={styles.url}>{url}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
