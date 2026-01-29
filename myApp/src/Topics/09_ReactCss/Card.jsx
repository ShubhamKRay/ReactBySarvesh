import styles from "./card.module.css";
import Demo from "./Demo";


const Card = () => {
  return (
    <div className={styles.card}>
        <h2>Card 1</h2>

        <Demo/>
         </div>
  );
};

export default Card;
