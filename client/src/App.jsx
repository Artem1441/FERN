import { useState, useEffect } from "react";
import { CONSTS } from "./constants";
import axios from "axios";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const sendUserName = () => {
    axios
      .post(`${CONSTS.BACKEND_URL}create`, {
        UserName: userName,
      })
      .then(function (res) {
        console.log(res.data);
        getUsers();
        setUserName("");
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const getUsers = () => {
    axios
      .get(`${CONSTS.BACKEND_URL}getAllUsers`)
      .then(function (res) {
        console.log("bbb");
        setUsers(res.data.users);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Write user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={sendUserName}>Send</button>
      {users.length > 0 &&
        users.map((user, index) => <h4 key={index}>{user.UserName}</h4>)}
    </div>
  );
}

export default App;
