import { addUser } from '@/store/nextSlice';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const LoginPage = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('')
    const dispatch = useDispatch();
    const router = useRouter()

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (user === "Demo" && password === "12345678") {
            dispatch(addUser({ name: user }))
            router.push('/')
        } else {
            setMsg('Enter correct credentials')
        }
        // Perform login logic here
    };

    return (
        <div className="flex justify-center items-center mt-[100px] mb-[100px]">
            <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user">
                        UserName
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="user"
                        type="user"
                        placeholder="username"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <p>Account: Demo</p>
                <p>Password: 12345678</p>

                <div className="flex items-center justify-between">

                    <button
                        className="bg-amazon_blue text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline hover:bg-amazon_yellow hover:text-black duration-300"

                    >
                        Sign In
                    </button>
                    <p className='text-red-500'>{msg}</p>
                </div>
            </form>
        </div>
    )
}

export default LoginPage