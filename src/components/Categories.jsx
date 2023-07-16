import { useState } from "react";

function Categories() {
  const [categoryId, setCategoryId] = useState(0);
  console.log(categoryId);
  const categories = [
    "Все",
    "Фильмы",
    "Сериалы",
    "Аниме",
    "Мультфильмы",
    "В планах",
  ];
  return (
    <nav className="menu__filters">
      <ul className="menu">
        {categories.map((category, id) => (
          <li
            key={id}
            onClick={() => setCategoryId(id)}
            className={`menu__list ${
              categoryId === id && categoryId % 2 === 0
                ? "active"
                : categoryId === id && categoryId % 2 === 1
                ? "active-odd"
                : ""
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
