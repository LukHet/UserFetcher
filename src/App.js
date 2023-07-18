import "./App.css";
import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";

const URL = "https://dummyjson.com/users";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);
  console.log(users);
  return (
    <div className="App">
      <UsersList users={users} />
    </div>
  );
};

export default App;
