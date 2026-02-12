import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Register() {
    const [formData, setFormData] = useState({
        username :"",
        password : "",
        email : "",
        phone : ""

})
    const navigate = useNavigate()
  const inputStyle = "border p-0.5 px-2 border-gray-500 rounded-md";

  const hdlChange = (evt) => {
    const {name, value} = evt.target
    setFormData((perv) => ({...perv, [name]: value}))
    console.log(name, value)
  }

  const hdlSubmit = async (evt) => {
    evt.preventDefault();
    try {
       const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData,
       )
       toast.success('ลงทะเบียนสำเร็จ')
       navigate('/post')
    } catch (error) {
        console.log('เกิดข้อผิดพลาด')
        toast.error('ผิดพลาด')

    }
  }


  return (
    <div className="mix-h-screen bg-gray-50 flex justify-center items-center p-20">
      <form onSubmit={hdlSubmit} className="bg-white p-6 rounded-md w-[600px] flex flex-col border">

        <h2 className="text-center text-4xl font-bold">Create Account</h2>

        <label htmlFor="">Username:</label>
        <input type="text" 
        className={inputStyle} 
        name="username" 
        placeholder="Hera" 
        onChange={hdlChange}
        value={formData.username}></input> <br />
        

        <label htmlFor="">Password:</label>
        <input type="password" 
        className={inputStyle} 
        name="password" 
        placeholder="********" 
        onChange={hdlChange}
         value={formData.password}></input> <br />

        <label htmlFor="">Email:</label>
        <input type="email" 
        className={inputStyle} 
        name="email" 
        placeholder="example@Gmail.com" 
        onChange={hdlChange}
         value={formData.email}></input><br />

        <label htmlFor="">Phone:</label>
        <input type="text" 
        className={inputStyle} 
        name="phone" 
        placeholder="065-xxxxxxx" 
        onChange={hdlChange}
         value={formData.phone}></input> <br />

        <button className="bg-amber-300 py-1 mt-3 rounded-2xl cursor-pointer hover:bg-rose-400 transition-all duration-150">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;