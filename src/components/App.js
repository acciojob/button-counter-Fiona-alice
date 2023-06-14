
import React, {useState} from "react";
import './../styles/App.css';

const[count, setCount] = useState(0)

const App = () => {
  return (
    <div>
        <p>{`Button clicked ${count} times`}</p>
        <button onClick ={()=>setCount(count+1)} id = "btn">Click me</button>
    </div>
  )
}

export default App