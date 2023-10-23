import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [message, setMessage] = useState<string>(
    "Let's learn more about testing in React")

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      {/* <Button disabled={false} onClick={() => setMessage("New message")}>Change message</Button> */}
      <button
        style={{ backgroundColor: "red", color: "white", padding: 10 }}
        onClick={() => setMessage("New message!")}>Change message</button>
    </div>
  );
}

export default App;
