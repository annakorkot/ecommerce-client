import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { SigninAsync } from '../redux/thunks/userThunk';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function doLogin() {
        await dispatch(SigninAsync({email:Logemail,password:password}));
        navigate('/profile')
    }
    
    const user = useSelector((state) => state.user);
    const [Logemail, setLogemail] = useState("");
    const [password, setPassword] = useState("");

    return (

        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-gray-800 rounded-lg shadow-md lg:max-w-xl">
                <h1 className="text-xl font-bold text-center text-white ">
                    Sign in
                               
            {/* {email && <div> Email: {email}</div>}
            {token && <div> token: {token}</div>} */}
                </h1>
                <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-white"
                        >
                            Email
                        </label>
                        <input
                            onChange={(email) => setLogemail(email.target.value)}
                            
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-white bg-gray-700 border rounded-md focus:border-gray-900 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-white"
                        >
                            Password
                        </label>
                        <input
                            onChange={(password) => setPassword(password.target.value)}
                            
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-white bg-gray-700 border rounded-md focus:border-purple-400 focus:ring-gray-700 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    {/* <a

                        className="text-xs text-gray-400 hover:underline"
                    >
                        Forget Password?
                    </a> */}
                    <div 
                    // onClick={() =>
                    //     dispatch(SigninAsync({ email: Logemail, password: password}))
                    // }
                     className="mt-6">
                        <button onClick={() => doLogin()} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-900">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-400">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        to='/register'
                        className="font-medium text-gray-400 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>

    );
}





export default Login;