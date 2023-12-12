import { useEffect, useState } from "react";
import { LiveVideo } from "./assets/svg";


function App() {
  const [state , setState] = useState({})

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((r) => r.json())
      .then((data) => {
        setState(data)
      });
  },[]);

  return (
    <div>
      <LiveVideo color={"green"} />
      <h1>Hello</h1>
      <h2>{state.name}</h2>
    </div>
  );
}

export default App;
