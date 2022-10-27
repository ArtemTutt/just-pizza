import React from "react";
import ReactPaginate from "react-paginate";
import s from "./Pagination.module.scss";

const Pagination = ({ onChangePage }) => {
  return (
    <div className={s.pagination}>
      <ReactPaginate
        className={s.pagination__item}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
