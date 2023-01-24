import { useState } from "react";

import "./App.css";

function App() {
  const initialValue = [];
  const [list, setList] = useState(initialValue);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div id="container">
        <div className="todo-list">
          <h1>Todo-list</h1>
          <div className="todo-form">
            <input
              className="input-form"
              type="text"
              value={inputValue}
              onChange={(e) => {
                const value = e.target.value;
                setInputValue(value);
                console.log(inputValue);
              }}
            />
            <button
              className="btn"
              onClick={() => {
                const value = inputValue;
                const li = { todo: value, isChecked: false };
                setList([...list, li]);
              }}
            >
              Add Todo
            </button>
          </div>
          <div className="entries">
            {list.map((listItem, idx) => (
              <div className="entry">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={listItem.isChecked}
                  onChange={() => {
                    listItem.isChecked = listItem.isChecked ? false : true;
                    list.splice(idx, 1); // To remove element from index
                    list.splice(idx, 0, listItem); // Again adding that element at particular index
                    setList([...list]); // Updating that list
                  }}
                />
                <h2 className={listItem.isChecked ? "line-through" : ""}>
                  {listItem.todo}
                </h2>
                <button
                  className="delete"
                  onClick={() => {
                    list.splice(idx, 1);
                    setList([...list]);
                  }}
                >
                  <img src="https://img.icons8.com/external-outline-design-circle/66/null/external-Dustbin-seo-web-optimization-outline-design-circle.png" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
