import React, { useState } from "react";

export default function NameForm(props) {

    const [userName, setName] = useState("");

    const changeName = (event) => {
        setName(event.target.value);
    }

    const addNewUser = (event) => {
        // event.preventDefault();
        console.log("in add New user");
        props.insertName(userName);
        setName("");
    }
    
    const deleteUser = () => {
        props.deleteName(userName);
        setName("");
    }

    const updateUser = () => {
        console.log("in update user");
        let user = prompt("Enter the name to be updated");
        props.updateName(userName,user);
        setName("");
    }

    return (
        <div>
            <h1>User Form For CRUD</h1>
            <form>
                Name: <input type = "text" name="userName" id="userName" value={userName} onChange={changeName}/> <br/> <br/>

                <button type="button" name="addUser" id="addUser" onClick={addNewUser}>Add User</button> 

                <button type="button" name="deleteUser" id="deleteUser" onClick={deleteUser}>Delete User</button>

                <button type="button" name="updateUser" id="updateUser" onClick={updateUser}>Update User</button>
            </form>
        </div>
    )
}