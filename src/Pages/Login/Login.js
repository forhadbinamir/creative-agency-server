import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/Login/google-logo.png'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import Loading from '../../Hooks/Loading';
const Login = () => {
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user || googleUser) {
            navigate('/home')
        }
    }, [user, googleUser, navigate])
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password)
        e.target.reset()
    }
    if (loading || googleLoading) {
        return <Loading />
    }
    let textError;
    if (error || googleError) {
        return (
            textError = <p>Error: {error.message}</p>
        );
    }
    return (
        <div className='p-16 border'>
            <div className='border mt-20 p-5 lg:w-[50%] sm:w-[100%] mx-auto'>
                <h2 className='text-2xl text-center font-bold'>Login</h2>
                <form onSubmit={handleLogin} className='px-10 py-5 rounded'>
                    <input className='w-full mb-2 p-3 border rounded' type="email" placeholder='Email' name="email" required />
                    <input className='w-full mb-2 p-3 border rounded' type="password" placeholder='Password' name="password" required />
                    <p className='text-right text-blue-600'>Reset password</p>
                    <input className='px-3 py-2 bg-accent font-bold rounded' type="submit" value='Login' />
                    {textError}
                    <div className="divider">OR</div>
                </form>
                <div onClick={() => signInWithGoogle()} className='flex justify-between items-center border rounded-2xl p-2 w-[50%] sm:w-[80%] mx-auto hover:bg-gray-300'>
                    <img className='w-8' src={google} alt="" />
                    <p className='text-center'>Continue with google</p>
                </div>
                <p className='text-center mt-2'>Don't have an account <span className='text-blue-600'><Link to='/register'>Create an Account</Link></span> </p>
            </div>
        </div>
    );
};

export default Login;