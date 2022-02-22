import './App.css';
import React, { useState } from 'react';

const memberList = [
  { name: "Alex", email: "gogogadget@yahoo.com", role: "UX Designer"},
  { name: "Beth", email: "bethisawesome@gmail.com", role: "Frontend Engineer"},
  { name: "Carl", email: "mediocrecoder@aol.com", role: "Backend Engineer"},
  { name: "Danielle", email: "seattlebound@outlook.com", role: "Quality Assurance"},
  { name: "Evan", email: "throwaway@zoho.com", role: "Director"}
]


function App() {
  return (
    <div className="App">
      <form>
        <input 
          name="name"
          placeholder="Enter your name here"
          value=""
          type="text"
        />
        <input 
          name="email"
          placeholder="Enter your email here"
          value=""
          type="email"
        />
      </form>
    </div>
  );
}

export default App;
