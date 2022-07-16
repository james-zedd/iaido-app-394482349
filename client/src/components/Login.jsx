import React from 'react';

const Login = ({ authenticate, errorMessage }) => {
    return (
        <div className='w-72 my-2 p-4 mx-auto border border-slate-500 rounded-lg bg-neutral-50 shadow-lg'>
            <h2 className='text-slate-900 text-3xl font-bold text-center'>
                Iaido app
            </h2>
            <h4 className='text-slate-900 text-2xl font-bold text-center'>
                Login
            </h4>
            {errorMessage !== '' && (
                <div className='error-message w-full mt-2 px-1 py-1 text-xs border border-red-600 rounded-lg text-center bg-red-500 text-white'>
                    {errorMessage}
                </div>
            )}
            <form onSubmit={authenticate} className='form'>
                <div className='form__input-container mt-3'>
                    <label htmlFor='email'>Email</label>
                    <div className='mt-1'>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='w-full border border-gray-300 px-2 py-1 rounded-lg shadow-sm focus:outline-none focus:border-indigo-100 focus:ring-1 focus:ring-indigo-500'
                        />
                    </div>
                </div>
                <div className='form__input-container mt-3'>
                    <label htmlFor='pwd'>Password</label>
                    <div className='mt-1'>
                        <input
                            type='text'
                            id='pwd'
                            name='password'
                            className='w-full border border-gray-300 px-2 py-1 rounded-lg shadow-sm focus:outline-none focus:border-indigo-100 focus:ring-1 focus:ring-indigo-500'
                        />
                    </div>
                </div>
                <div className='form__input-container mt-4 text-center'>
                    <input
                        type='submit'
                        value='Login'
                        className='w-full bg-red-500 hover:bg-red-700 hover:cursor-pointer px-4 py-2 rounded-lg text-white'
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;
