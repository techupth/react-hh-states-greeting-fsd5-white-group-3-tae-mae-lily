import "./App.css";
import { useState } from "react"; //import function useState จาก React Package เข้ามา

function App() {
  //ใส่ Argument ตั้งต้นของฟังก์ชัน
  const [state, setState] = useState("Greeting Message"); // [state, function setState]
  return (
    <div className="App">
      <div className="greeting-container">{state}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setState("สวัสดี");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setState("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setState("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
