import { Link } from "react-router-dom";
import styles from "../styles/Cards.module.css";


const cardData = [
  { id: "fullstack", title: "Full Stack Web Development", image: "/images/dimag.png" },
  { id: "ai-ml", title: "AI and ML", image: "/images/ai-ml.png" },
  { id: "ar-vr", title: "AR and VR", image: "/images/ar-vr.png" },
  { id: "bci", title: "BCI and new Emerging Tech.", image: "/images/bci.png" },
  { id: "iot", title: "Internet of things", image: "/images/iot.png" },
];

const Cards = () => {
  return (
    <div className={styles.cardContainer}>
      {cardData.map((card) => (
        <div key={card.id} className={styles.card}>
          <img src={card.image} alt={card.title} className={styles.cardImage} />
          <h3>{card.title}</h3>
          <Link to={`/${card.id}`} className={styles.knowMore}>
            Know more ▼
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
