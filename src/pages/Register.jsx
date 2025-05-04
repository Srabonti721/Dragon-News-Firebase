import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../components/provider/AuthProvider';

const Register = () => {

    const { createUser,setUser, ProfileUpDate} = use(AuthContext);
    const [nameError,setNameError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        if(name.length<5){
          setNameError('name should most be 5 charecter')
            return;
        }
        else{
            setNameError('');
        }
        const photo = e.target.photo.value;
        console.log({ email, password, name, photo });
        createUser(email, password)
            .then(result => {
                const user = result.user;
                ProfileUpDate({ displayName:name,photoURL:photo})
                .then(()=>{
                    setUser({...user,displayName:name,photoURL:photo});
                    navigate('/')
                })
                .catch(error=>{console.log(error);
                    setUser(user);
                })
                
                // console.log(user);
            })
            .catch(error => {
                console.log(error);
                const errormessage = error.message;
                alert(errormessage)
            })

    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-2xl font-bold">Register your account</h1>
                    <form onSubmit={handleRegister} className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="your name" required />
                        {
                            nameError && <p className='text-red-500'>{nameError}</p>
                        }
                        {/* photo */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="photo url" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        {/*chackbox  */}
                        <label className="label py-2">
                            <input type="checkbox" className="checkbox" />
                            Accept Term & Conditions
                        </label>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    {
                        <p>Allready Have An Account ? {" "}<Link className='text-red-600' to="/auth/login">Login</Link></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Register;