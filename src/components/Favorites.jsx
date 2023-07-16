
import styles from "./Favorites.module.scss";

const Favorites = () => {
  return (
    <div className={styles.filmFavorites}>
      <h2 className={styles.title}>Избранные фильмы</h2>
      <div className={styles.filmList}>
        {/* Ваш код для отображения списка избранных фильмов */}
      </div>
    </div>
  );
};

export default Favorites;
