import "./App.css";
import { useState } from "react";


const App = () => {
  const [message, setState] = useState('Greeting Message');
  //Declares a state variable named message using the useState hook. The initial state is set to the string 'Greeting Message,' and the setState function is used to update the state
  
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={() => {setState('สวัสดี!')}}>สวัสดี!</button>
        <button onClick={() => {setState('Hi')}}>Hi!</button>
        <button onClick={() => {setState('你好!')}}>你好!</button>
      </div>
    </div>
  );
}

export default App;
