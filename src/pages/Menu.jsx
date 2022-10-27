import React, { useContext, useEffect, useState } from "react";
import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/Skeleton/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import axios from "axios";
import Search from "../components/Search/Search";
import Pagination from "../components/Pagination/Pagination";
import { AppContext } from "../App";

const Menu = () => {
  //https://633dadfaf2b0e623dc79626b.mockapi.io/PizzaAPI

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  // для создания сортир овки
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState("популярности");

  // Создание поиска пицц
  // const [searchValue, setSearchValue] = useState("");
  const { searchValue } = useContext(AppContext);

  // в useEff можно передать и sortType чтобы былы сортировка
  useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    axios
      .get(
        `https://633dadfaf2b0e623dc79626b.mockapi.io/PizzaAPI?page=${page}&limit=4&${category}&${search}`
      )
      .then((res) => setItems(res.data))
      .finally(() => setIsLoading(false));
  }, [categoryId, searchValue, page]);
  return (
    <>
      <Search />
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : items
              // .filter((obj) => {
              //   if (
              //     obj.title.toLowerCase().includes(searchValue.toLowerCase())
              //   ) {
              //     return true;
              //   }
              //   return false;
              // })
              .map((item, i) => (
                <PizzaBlock
                  key={i}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  sizes={item.sizes}
                  types={item.types}
                />
              ))}
      </div>
      <Pagination onChangePage={(num) => setPage(num)} />
    </>
  );
};

export default Menu;
