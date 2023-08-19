import React, {useState} from 'react'


export default function Form (props) {
    const handleChange = (event) => {
      const { name, value } = event.target;
      props.change(name, value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.submit();
        console.log(props)

    }
    return (
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:&nbsp;
            <input 
              placeholder='Enter Name Here'
              value={props.values.name}
              name='name'
              onChange={handleChange}
            />
          </label><br></br>

          <label>
            Email:&nbsp;
            <input 
              placeholder='Enter Email Here'
              value={props.values.email}
              name='email'
              onChange={handleChange}
            />
          </label><br></br>

        
          <label>
            Role:&nbsp;
            <input 
              placeholder='Enter Role Here'
              value={props.values.role}
              name='role'
              onChange={handleChange}
            />
          </label>
          <br></br>
          <input type='submit' value='Create your Team Members'></input>
        </form>
    </div>
    )
}