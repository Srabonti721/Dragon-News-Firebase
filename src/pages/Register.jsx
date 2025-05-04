import React from 'react';
import { Link } from 'react-router';

const Register = () => {

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold">Register your account</h1>
                    <form className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="your name" />
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="photo url" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        {/*chackbox  */}
                            <label className="label py-2">
                                <input type="checkbox"  className="checkbox" />
                                Accept Term & Conditions
                            </label>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    {
                        <p>Allready Have An Account ? <Link className='text-red-600' to="/auth/login">Login</Link></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;