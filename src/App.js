import './App.css';
import React, { useState } from 'react';

const memberList = [
  { name: "Alex", email: "gogogadget@yahoo.com", role: "UX Designer"},
  { name: "Beth", email: "bethisawesome@gmail.com", role: "Frontend Engineer"},
  { name: "Carl", email: "mediocrecoder@aol.com", role: "Backend Engineer"},
  { name: "Danielle", email: "seattlebound@outlook.com", role: "Quality Assurance"},
  { name: "Evan", email: "throwaway@zoho.com", role: "Director"}
]

const memberValues = {
  name: "",
  email: "",
  role: ""
}

function App() {

const [members, setMembers] = useState(memberList);
const [values, setValues] = useState(memberValues);

const editor = (event => {
  console.log(event.target.value);
  setValues({...values, [event.target.name]: event.target.value});
});

const submit = (event) => {
  event.preventDefault();
  const newMember = {
    name: values.name,
    email: values.email,
    role: values.role
  }
  setMembers(members.concat(newMember));
  setValues(memberValues);
}

const display = members.map((e, id) => {
  return <p key={id}>{e.name} is a {e.role}! You can reach them at {e.email}</p>
})

  return (
    <div className="App">
      <h1>Welcome to the Members' Membership!</h1>
      <h3>Look at all of our current members below:</h3>
      {display}
      <form onSubmit={submit}>
        <label>Name:
          <input 
            name="name"
            placeholder="Enter your name here"
            value={values.name}
            type="text"
            onChange={editor}
          />
        </label>
        <label>Email: 
          <input 
            name="email"
            placeholder="Enter your email here"
            value={values.email}
            type="email"
            onChange={editor}
          />
        </label>
        <label>Role: 
          <input 
            name="role"
            placeholder="Enter your role here"
            value={values.role}
            type="text"
            onChange={editor}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;


// --> Old way (using three slices of state and refactored to use only one) <--
// const nameChange = (event => {
//   console.log(event.target.value);
//   setValues({...memberValues, name: event.target.value});
// });

// const emailChange = (event => {
//   console.log(event.target.value);
//   setValues({...memberValues, email: event.target.value});
// });

// const roleChange = (event => {
//   console.log(event.target.value);
//   setValues({...memberValues, role: event.target.value});
// });
// --> In each input field <--
// onChange={nameChange}
// onChange={emailChange}
// onChange={roleChange}