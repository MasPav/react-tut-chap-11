import React from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = React.useState([]);
  const addToUsersList = (data) => {
    setUsers(previous => [data, ...previous]);
  }
  const removeUserFromListHandler = (userId) => {
    setUsers(previous => {
      const filteredUsers = previous.filter(user => user.id !== userId);
      return filteredUsers;
    })
  }
  return (
    <div className="flex justify-center pt-10">
      <div className="w-4/12">
        <AddUser onAddUser={addToUsersList}/>
        <UsersList users={users} onDeleteUser={removeUserFromListHandler}/>
      </div>
    </div>
  );
}

export default App;
