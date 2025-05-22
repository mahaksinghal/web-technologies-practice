import NameList from './components/NameList';
import NameForm from './components/NameForm';
import { useState } from 'react';

function App() {
  // array for storing the data in a state
  const [userData, setUserData] = useState(["Ashutosh", "Saurabh", "Shivam", "Ravi", "Amit"]);

  // function to add new user
  const addNewUser = (newUser) => {
    console.log("New User: ", newUser);
    setUserData([...userData, newUser])
  }

  const deleteUserName = (userName) => {
    let arr = userData.filter(user => user != userName);
    setUserData([...arr]);
  }

  const modifyUserName = (oldUserName, newUserName) => {
    console.log("Old User: ", oldUserName);
    console.log("New User: ", newUserName);
    let arr = userData.map(user => user!=oldUserName ? user : newUserName);
    setUserData([...arr]);
  }

return(
  <div>
    <NameList arr={userData} />
    <NameForm 
    insertName={addNewUser}
    deleteName={deleteUserName}
    updateName={modifyUserName}
    ></NameForm>
  </div>
)}
export default App;
