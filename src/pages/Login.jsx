import axios from 'axios';
import React, { useState } from 'react'
import useUserStore from '../stores/userStore';
import { useNavigate } from 'react-router';

function Login() {

    const [formLogin, setFormLogin] = useState({
        username: 'emilys',
    password: 'emilyspass',
    })
    const setUser = useUserStore((state) => state.setUser)
    const setToken = useUserStore((state) => state.setToken)
    const navigate = useNavigate()

    const inputStyle = "border p-0.5 px-2 border-gray-500 rounded-md";

    const hdlChange = (e) => {
        const {name, value} = e.target
        setFormLogin((prev) => ({...prev, [name]: value}))
    }

    const hdlSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('https://dummyjson.com/auth/login',formLogin)
        console.log(res.data)

        const {image, lastName, firstName, username, email, accessToken } = res.data
        setUser({image, lastName, firstName, username, email})
        setToken(accessToken)
        navigate('/profile')
    }
    console.log(formLogin)

    return (
        <div className="mix-h-screen bg-gray-50 flex justify-center items-center p-20">
            <form onSubmit={hdlSubmit} className="bg-white p-6 rounded-md w-[600px] flex flex-col border">

                <h2 className="text-center text-4xl font-bold">Login</h2>

                <label htmlFor="">Username:</label>
                <input type="text"
                    className={inputStyle}
                    name="username"
                    placeholder="Hera"
                    onChange={hdlChange}
                    value={formLogin.username}
                ></input>

                <br />


                <label htmlFor="">Password:</label>
                <input type="password"
                    className={inputStyle}
                    name="password"
                    placeholder="********"
                    onChange={hdlChange}
                    value={formLogin.password}
                ></input>

                <br />
                <button className="bg-amber-300 py-1 mt-3 rounded-2xl cursor-pointer hover:bg-rose-400 transition-all duration-150">Login</button>

            </form>
        </div>
    )
}

export default Login