import { useState } from "react";

export default function Animals() {
  const [inputItem, setInputItem] = useState("");
  const [list, setList] = useState([]);

  return (
    <div id="container-1">
      <div className="input-box">
        <input
          type="text"
          value={inputItem}
          onChange={(e) => {
            const input = e.target.value;
            setInputItem(input);
          }}
        />
        <button
          className="btn-3"
          onClick={() => {
            setList([...list, inputItem]);
          }}
        >
          Add 🐕
        </button>
      </div>
      <div className="animals-entries">
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </div>
    </div>
  );
}
