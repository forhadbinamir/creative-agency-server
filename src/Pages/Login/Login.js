import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/Login/google-logo.png'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import Loading from '../../Hooks/Loading';
import { toast } from 'react-toastify';
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [user, googleUser, navigate, from])
    const handleLogin = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        console.log(email, password)
        e.target.reset()
    }
    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email)
        await sendPasswordResetEmail(email)
        if (!email) {
            toast('Please enter your valid email address')
        }
        else {
            toast('Check Your email')
        }

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
                    <input className='w-full mb-2 p-3 border rounded' type="email" placeholder='Email' ref={emailRef} name="email" required />
                    <input className='w-full mb-2 p-3 border rounded' type="password" placeholder='Password' ref={passwordRef} name="password" required />
                    <p onClick={() => handleResetPassword()} className='text-right cursor-pointer text-blue-600'>Reset password</p>
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