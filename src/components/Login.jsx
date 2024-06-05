import React from 'react'

const SignUp = () => {
  return (
    <div className='Login'>
      <h2>Login</h2>
      <form>
        <div>
            <label htmlFor='name'>email</label>
            <input 
                type='text'
                id='name'
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
        <button
            type='submit'
            className='submit'
        >Login</button>
      </form>
    </div>
  )
}

export default SignUp
