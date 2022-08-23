import { useEffect, useState } from "react";
import Pagination from "./component/Pagination";
import SearchStatus from "./component/SearchStatus";
import SearchText from "./component/SearchText";
import TodoContainer from "./component/TodoContainer";
import TodoForm from "./component/TodoForm";
import Todolist from "./component/TodoList";
import axios from "axios";

// const axios = require('axios')

function App() {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:8080/todos");
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  //parameter1 ใน useeffect ห้ามเป็น asyn
  useEffect(() => {
    // axios
    //   .get("http://localhost:8080/todos")
    //   // obj ที่ส่งออกมา { data:..,status:...,statusText:...,headers:..,request:...}
    //   .then((res) => {
    //     // console.log(res.data);
    //     setTodos(res.data.todos);
    //   })
    //   .catch((err) => console.log(err));
    fetchTodos();
  }, []);

  const handleSubmitCreate = (title) => {};
  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        {/* ********** ADD TODO FORM ********** */}
        {/* <TodoForm fetchTodos={fetchTodos} /> */}
        <TodoForm fetchTodos={fetchTodos} onSubmit={handleSubmitCreate} />
        {/* ********** END ADD TODO FORM ********** */}
      </div>

      <TodoContainer todos={todos} fetchTodos={fetchTodos} />

      {/* <div className="my-2 d-flex justify-content-between"> */}
      {/* ********** PAGE LIMIT ********** */}

      {/* ********** END PAGE LIMIT ********** */}

      {/* ********** SORT BY ********** */}

      {/* ********** END SORT BY ********** */}
      {/* </div> */}

      {/* ********** TODO LIST ********** */}
      {/* <ul className="list-group my-2"> */}

      {/* ********** TODO ITEM#1 ********** */}

      {/* ********** END TODO ITEM#1 ********** */}

      {/* ********** TODO ITEM#2 ********** */}
      {/* </ul> */}
      {/* ********** END TODO LIST ********** */}

      {/* ********** PAGINATION ********** */}

      {/* ********** END PAGINATION ********** */}
    </div>
  );
}

export default App;
