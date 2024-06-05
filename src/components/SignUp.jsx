import React from 'react'

const SignUp = () => {
  return (
    <div className='SignUp'>
      <h2>Sign Up</h2>
      <form>
        <div>
            <label htmlFor='name'>name</label>
            <input 
                type='text'
                id='name'
                required
            />
        </div>
        <div>
            <label htmlFor='email'>email</label>
            <input 
                type='email'
                id='email'
                required
            />
        </div>
        <div>
            <label htmlFor='password'>password</label>
            <input 
                type='password'
                id='password'
                required
            />
        </div>
        <div>
            <label htmlFor='cf-password'>confirm password</label>
            <input 
                type='password'
                id='cf-password'
                required
            />
        </div>
        <button
            type='submit'
            className='submit'
        >Sign up</button>
      </form>
    </div>
  )
}

export default SignUp
