import React from 'react'

export default function LoginForm() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
    <div className='w-full max-w-md bg-white p-8 rounded shadow'>
        <h2 className='text-2xl font-bold text-gray-800 text-center mb-4'>Login</h2>
        {/* {error && <div className='mb-4 text-red-500 text-center'>{error}</div>} */}
        <form onSubmit={''} className='space-y-4'>
            <div>
                <label htmlFor='email'  className='px-1 block text-sm font-medium text-gray-600'>Email</label>
                <input
                    type="email"
                    name="email"
                    id='email'
                    value={''}
                    onChange={''}
                    required
                    className='mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>

            <div>
                <label htmlFor='password'  className='px-1 block text-sm font-medium text-gray-600'>Password</label>
                <input
                    type="password"
                    name="password"
                    id='password'
                    value={''}
                    onChange={''}
                    required
                    className='mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
            </div>
            <button
                type='submit'
                disabled={''}
                className='mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-500 text-white'
            >
                Login
            </button>
            <p className='mt-4 text-sm text-grey-500 text-center'>
                Don't have an account? <a href='/register' className='text-blue-500'>Register</a>
            </p>
        </form> 
    </div>
    </div>
  )
}
