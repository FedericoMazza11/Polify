import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {

const [input, setInput] = useState({
  user: '',
  password: ''
});

function handleChange(event) {
  const {name, value} = event.target
  setInput(prevInput => {
    return {
      ...prevInput,
      [name]: value
    }
  })
}

async function handleClick(event) {

  event.preventDefault();
  const newUser = {
    user: input.user,
    password: input.password
  }
  await axios.post('http://localhost:3001/create', newUser).then(    window.location.href = 'http://localhost:3000/')

}


const [user, reqUser] = useState({
  user: '',
  password: ''
});




async function handleClick2(event) {
  event.preventDefault();
  try {
    const response = await axios.get('http://localhost:3001/user');
    console.log(response);
  } catch (error) {
    console.error(error);
  } 

}

  return (

    <form>

    <div>
      <input onChange={handleChange} value={input.user} name="user">
        
      </input>
    </div>
    <div>
      <input onChange={handleChange} name="password" value={input.password} type="password">
        
      </input>
    </div>

    <button onClick={handleClick}>SUBMIT DATA</button>
        <button onClick={handleClick2}>REQUEST DATA</button>

    </form>

  )
}

export default Login