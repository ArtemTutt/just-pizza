import React, { useContext } from "react";
import s from "./Search.module.css";
import { AppContext } from "../../App";

const Search = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);
  return (
    <div className={s.search_container}>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        type="text"
        placeholder="Найди свою пиццу..."
        className={s.search_input}
      />
    </div>
  );
};

export default Search;
