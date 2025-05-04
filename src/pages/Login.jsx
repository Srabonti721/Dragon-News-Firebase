import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../components/provider/AuthProvider';
import { useLocation } from 'react-router';

const Login = () => {
  const [error,setError] = useState("");
    const {userLogin}=use(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();


    const handleLogin=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        userLogin(email,password)
        .then(result =>{
            const user = result.user
            console.log(user);
            navigate(`${location.state?location.state:'/'}`)
        })
        .catch(error=>{
            const errorCode = error.code;
            setError(errorCode);
            // const errorMessage = error.message;
            // alert(errorCode,errorMessage)
        })
    }
    return (
          <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
            <h1 className="text-2xl font-bold">Login your account</h1>
              <form onSubmit={handleLogin} className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required />

                {/* password */}
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                {
                  error && <p className='text-red-500'>{error}</p>
                }
                <button className="btn btn-neutral mt-4">Login</button>
              </form>
              {
                <p>Dont’t Have An Account ? <Link className='text-red-600' to="/auth/register">Register</Link></p>
              }
            </div>
          </div>
          </div>
    );
};

export default Login;
