import React, { useState } from "react";
const chose = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const Categories = ({ categoryId, setCategoryId }) => {
  // console.log(categoryId);
  // const [active, setActive] = useState(0);

  return (
    <div className="categories">
      <ul>
        {chose.map((item, i) => (
          <li
            key={i}
            onClick={() => setCategoryId(i)}
            className={categoryId === i ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
