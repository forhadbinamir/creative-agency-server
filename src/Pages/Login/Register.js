import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/Login/google-logo.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';
import Loading from '../../Hooks/Loading';
import { useForm } from 'react-hook-form';
const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data.email, data.password)
    }
    useEffect(() => {
        if (user || googleUser) {
            navigate('/login')
        }
    }, [user, googleUser, navigate])
    if (loading || googleLoading) {
        return <Loading />
    }
    let textError;
    if (error || googleError) {
        return (
            textError = <p className='text-red-500'><small>{error?.message}{googleError?.message} </small></p>
        );
    }
    return (
        <div className='p-16 border'>
            <div className='border mt-20 p-5 lg:w-[50%] sm:w-[100%] mx-auto'>
                <h2 className='text-2xl text-center font-bold'>Register</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='px-10 py-5 rounded'>

                    <input {...register("name", { required: true })} className='w-full mb-2 p-3 border rounded' type="text" placeholder='Name' name="name" />
                    {errors.name?.type === 'required' && <span className='text-red-500'>Name is required</span>}

                    <input {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid email'
                        }
                    })} className='w-full mb-2 p-3 border rounded' type="email" placeholder='Email' name="email" />
                    {errors.email?.type === 'required' && <span className='text-red-500'>Email is required</span>}

                    <input {...register("password", { required: true })} className='w-full mb-2 p-3 border rounded' type="password" placeholder='Password' name="password" />
                    {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}

                    <input {...register("confirmPassword", { required: true })} className='w-full mb-2 p-3 border rounded' type="password" placeholder='Confirm Password' name="confirmPassword" />
                    {errors.confirmPassword?.type === 'required' && <span className='text-red-500'>Confirm Password is required</span>}

                    <div>
                        <input className='px-3 py-2 bg-accent font-bold rounded' type="submit" value='Register' />
                    </div>
                    {textError}
                    <div className="divider">OR</div>
                </form>
                <div onClick={() => signInWithGoogle()} className='flex justify-between items-center border rounded-2xl p-2 w-[50%] sm:w-[80%] mx-auto hover:bg-gray-300'>
                    <img className='w-8' src={google} alt="" />
                    <p className='text-center'>Continue with google</p>
                </div>
                <p className='text-center mt-2'>Already have an account <span className='text-blue-600'><Link to='/login'>Please Login</Link></span> </p>
            </div>
        </div>
    );
};

export default Register;