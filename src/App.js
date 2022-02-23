import './App.css';
import React, { useState } from 'react';
import Form from './Form';

const memberList = [
  { name: "Alex", email: "gogogadget@yahoo.com", role: "UX Designer"},
  { name: "Beth", email: "bethisawesome@gmail.com", role: "Frontend Engineer"},
  { name: "Carl", email: "mediocrecoder@aol.com", role: "Backend Engineer"},
  { name: "Danielle", email: "seattlebound@outlook.com", role: "Quality Assurance"},
  { name: "Evan", email: "throwaway@zoho.com", role: "Director"}
]

function App() {

const [members, setMembers] = useState(memberList);
const [values, setValues] = useState({ name: "", email: "", role: ""});

const onSubmit = () => {
  setMembers([values, ...members]);
  setValues({name: "", email: "", role: ""})
}

const onChange = (name, value) => {
  setValues({...values, [name]: value})
}

const display = members.map((e, id) => {
  return <p key={id}>{e.name} is a {e.role}! You can reach them at {e.email}</p>
})

  return (
    <div className="App">
      <h1>New Membership list!</h1>
      {display}
      <Form
        submit={onSubmit}
        onChange={onChange}
        values={values}
      />
    </div>
  );
}

export default App;