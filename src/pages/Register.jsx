import React,{useState} from 'react'
import axios from 'axios'
export default function Register() {
    const [value, setValue] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postUserData()
        setValue(value);
        console.log(value);
    };
    const postUserData = async () => {
           await axios.post("", value).then((response) =>console.log(response))
    };
  return (
    <div>
      <p className='text-[20px] text-center'>Register</p>

      <form action="">
        <input onChange={(e)=>handleChange(e)} name="username" type="text" placeholder='username' />
        <input onChange={(e)=>handleChange(e)} name="email" type="mail" placeholder='email' />
        <input onChange={(e)=>handleChange(e)} name="password" type="password" placeholder='password' />
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  )
}
