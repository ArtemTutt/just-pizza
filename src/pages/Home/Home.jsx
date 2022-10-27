import React from "react";
import s from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={s.home_container}>
      <h2 className={s.home_title}>Самая вкусная пицца только в JUST PIZZA</h2>
      <img
        className={s.home_img}
        src="img/meksikanskaya-picca-ostraya_1616760935_13_max.jpg"
      />
      <Link to="/menu" className={s.home_btn}>
        Перейти к покупке
      </Link>
    </div>
  );
};

export default Home;
