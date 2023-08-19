import './App.css'
import React, { useState } from "react"
import Form from './Components/Form'



export default function App () {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({ name:'', email: '', role: ''})

  const onSubmit = () => {
    setMembers([values, ...members]);
    setValues({ name:'', email: '', role: ''})
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value})
  }

  return (
    <div>
      <div>
        <h1>Team Builder App!</h1>
        <Form 
          values={values}
          change={onChange}
          submit={onSubmit}
        />
      </div>

      {members.map((member, idx) => {
        return (
          <div key={idx}>
            {member.email}, {member.name}, {member.role}
          </div>
        )
      })}

      
    </div>
    
  )
}