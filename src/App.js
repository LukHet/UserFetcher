import "./App.css";
import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

const URL = "https://dummyjson.com/users";

const App = () => {
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setFetchedUsers(data.users));
  }, []);

  const handleClick = () => {
    if (fetchedUsers.length > 2) {
      setCurrentUsers((arr) => [...arr, fetchedUsers[0]]);
      setFetchedUsers((arr) => [arr.shift(), ...arr]);
      return;
    }
    alert("Dodano już wszystkich użytkowników!");
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Dodaj użytkownika</button>
      <UsersList users={currentUsers} />
    </div>
  );
};

export default App;
