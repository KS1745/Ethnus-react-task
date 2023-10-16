import { useState } from "react";
import "./Word.css"

function F1() {
  const [count, setCount] = useState(0);
  const handleChange = (event) => {
    let words = event.target.value.trim().split(/\s+/);
    setCount(words.length);
    if (event.target.value === "") {
      setCount(0);
    }
  };
  return (
    <div class="container">
      <h2>Responsive Paragraph Word Counter</h2>
      <textarea
        class="textarea"
        placeholder="Enter Text"
        onChange={handleChange}
      ></textarea>
      <p>Word Count:{count}</p>
    </div>
  );
}
export default F1;
