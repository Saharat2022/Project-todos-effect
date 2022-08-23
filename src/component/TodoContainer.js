import React from "react";
import PageLimit from "./PageLimit";
import Pagination from "./Pagination";
import SearchStatus from "./SearchStatus";
import SearchText from "./SearchText";
import Sort from "./Sort";
import Todolist from "./TodoList";

function TodoContainer(props) {
  return (
    <>
      <div className="my-2 d-flex gap-3">
        {/* ********** SEARCH TEXT ********** */}
        <SearchText />
        {/* ********** END SEARCH TEXT ********** */}

        {/* ********** SEARCH STATUS ********** */}
        <SearchStatus />
        {/* ********** END SEARCH STATUS ********** */}
      </div>
      <div className="my-2 d-flex justify-content-between">
        <PageLimit />
        <Sort />
      </div>
      <Todolist todos={props.todos} />
      {/* ********** TODO ITEM#1 ********** */}

      {/* ********** END TODO ITEM#1 ********** */}

      {/* ********** TODO ITEM#2 ********** */}

      {/* ********** END TODO LIST ********** */}

      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 6 to 10 of 12 entries</small>
        {/* ********** PAGINATION ********** */}
        <Pagination />
        {/* ********** END PAGINATION ********** */}
      </div>
    </>
  );
}

export default TodoContainer;
