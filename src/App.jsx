import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List/List";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <List list={data} />
    </>
  );
}

export default App;
