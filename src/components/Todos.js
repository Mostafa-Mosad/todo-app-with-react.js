import React from "react";

function Todos({ todos, deleteTodo }) {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="container" key={todo.id}>
          <div className="todo m-3" >
            <div className="card">
              <div className="card-header">{todo.title}</div>
              <div className="card-body font-weight-bold">{todo.content}</div>
              <div className="card-footer">
                <div className="actions">
                  <div className="d-flex justify-content-end">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteTodo(todo.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <h3>You haven't ToDos Yet :)</h3>
  );
  return <div>{todosList}</div>;
}

export default Todos;
