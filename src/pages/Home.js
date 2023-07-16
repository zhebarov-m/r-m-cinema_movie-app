import React, { useEffect, useState } from "react";
import FilmsCard from "../components/FilmsCard";
import Categories from "../components/Categories";

function Home() {
  const [films, setFilms] = useState([]);
  const fetchPizzas = async () => {
    try {
      const response = await fetch(
        `https://b41e42638edd9283.mokky.ru/all-films`
      );
      const data = await response.json();
      setFilms(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPizzas();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Categories />
      <div className="list__films">
        {films.map((film) => (
          <FilmsCard key={film.id} {...film} />
        ))}
      </div>
    </>
  );
}

export default Home;
