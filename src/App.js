import { useEffect, useState } from "react";
import useMoveArray from "./helpers/move";
import fetchArtists from './helpers/fetch'
import './styles.css';


function App() {
  const { move, add, show } = useMoveArray([1, 2, 3, 4, 5]);
  const [value, setValue] = useState("");
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = async () => {
    const data = await fetchArtists(value);
    if (data && data.length) add(data);
  };
  useEffect(() => {
    const updateInterval = setInterval(() => {
      move();
    }, 1000);

    return () => {
      clearInterval(updateInterval);
    };
  }, [move]);
  return (
      <div
       className='container'
      >
        <div className="container_input">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="write something"
          />
          <button type="submit" onClick={handleSubmit} disabled={!value}>
            Search
          </button>
        </div>
        <ul
         className="container_list"
        >
          {show.map((elem) => (
            <li
             className="container_list_item"
            >
              {elem}
            </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
