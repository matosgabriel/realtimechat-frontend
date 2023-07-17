import { FormEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { io } from "socket.io-client";
const socket = io("http://localhost:3333");

function App() {
  const [message, setMessage] = useState("");

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    socket.emit("send_message", { message });
  }

  return (
    <form onSubmit={(event) => sendMessage(event)}>
      <input
        placeholder="Mensagem"
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
