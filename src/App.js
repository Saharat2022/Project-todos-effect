import Pagination from "./component/Pagination";
import SearchStatus from "./component/SearchStatus";
import SearchText from "./component/SearchText";
import TodoContainer from "./component/TodoContainer";
import TodoForm from "./component/TodoForm";
import Todolist from "./component/TodoList";

function App() {
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        {/* ********** ADD TODO FORM ********** */}
        <TodoForm />
        {/* ********** END ADD TODO FORM ********** */}
      </div>

      <TodoContainer />

      {/* <div className="my-2 d-flex justify-content-between"> */}
      {/* ********** PAGE LIMIT ********** */}

      {/* ********** END PAGE LIMIT ********** */}

      {/* ********** SORT BY ********** */}

      {/* ********** END SORT BY ********** */}
      {/* </div> */}

      {/* ********** TODO LIST ********** */}
      {/* <ul className="list-group my-2"> */}
      <Todolist />
      {/* ********** TODO ITEM#1 ********** */}

      {/* ********** END TODO ITEM#1 ********** */}

      {/* ********** TODO ITEM#2 ********** */}
      {/* </ul> */}
      {/* ********** END TODO LIST ********** */}

      <div className="my-2 d-flex justify-content-between align-items-center">
        <small className="text-muted">Showing 6 to 10 of 12 entries</small>
        {/* ********** PAGINATION ********** */}
        <Pagination />
        {/* ********** END PAGINATION ********** */}
      </div>
    </div>
  );
}

export default App;
