import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import styles from "./FilmsCard.module.scss";
import { useState } from "react";

function FilmsCard(props) {
  const { title, imageUrl, date, rating } = props;
  const [isFavorite, setIsFavorite] = useState(true);
  console.log(isFavorite)

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.filmCard}>
      <a href="#">
        {isFavorite ? (
          <MdOutlineFavoriteBorder
            onClick={handleFavoriteClick}
            className={styles.favoritesIcon}
          />
        ) : (
          <MdOutlineFavorite
            onClick={handleFavoriteClick}
            className={`${styles.favoritesIcon} ${styles.active}`}
          />
        )}
        <img className={styles.photo} src={imageUrl} alt="" />
      </a>
      <div className={styles.filmsCardText}>
        <p style={{ fontSize: "25px" }}>{title}</p>
        <p style={{ fontWeight: "500" }}>Год выпуска: {date}</p>
        <p style={{ fontWeight: "500" }}>Рейтинг: {rating}</p>
      </div>
    </div>
  );
}

export default FilmsCard;
