import { useState } from "react";
import "./App.css";
import { useStorage } from "./customHooks/useStorage";

function App() {
  const [value, setValue] = useStorage("MyInfo", "");

  const handleSubmit = (e) => {
    e.preventDefault();
    let msg = ": is stored in LocalStorage and SessionStorage"
    alert(value + msg);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
}

export default App;
