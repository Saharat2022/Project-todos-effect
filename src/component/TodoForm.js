import axios from "axios";
import React, { useState } from "react";

function TodoForm(props) {
  const [title, setTitle] = useState("");
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //validate

    try {
      //if success validate: sent to 8080 โดยส่ง  { title,completed: false } ไป
      const res = await axios.post("http://localhost:8080/todos", {
        title,
        completed: false,
      });
      props.fetchTodos();
      setTitle("");
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            <i className="fa-solid fa-check" />
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            // onClick={() => setTitle("") ไม่ควรทำเเบบนี้เอาไปใช้ต่อยาก ควรใช้เเบบcondition}
            onClick={() => setTitle("")}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        {/* <small className="text-danger">Title is required.</small> */}
      </form>
    </div>
  );
}

export default TodoForm;
