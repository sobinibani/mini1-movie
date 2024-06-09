import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
import app from '../firebase'
import { createUserWithEmailAndPassword, getAuth, updateProfile, signOut } from 'firebase/auth';


const SignUp = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cfPassword, setCfPassword] = useState('');

    
    const [idError, setIdError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSignUp = async(e) => {
        e.preventDefault();
        if (password !== cfPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        if (password.length < 6){
            setPasswordError('비밀번호는 6글자 이상이여야 합니다.');
            return;
        }
        try{
            const userCredential  = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: name });

            await signOut(auth);
            navigate(`/signComplete`)

        } catch(error){
            const {code, message} = error;
            if (code === 'auth/email-already-in-use') {
                setIdError('이미 사용중인 이메일입니다.');
            } 
        }
    }

  return (
    <div className='SignUp'>
      <h2>회원가입</h2>
      <form onSubmit={handleSignUp}>
        <div>
            <label htmlFor='name'>이름</label>
            <input 
                type='text'
                id='name'
                required
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
        </div>
        <div>
            <label htmlFor='email'>이메일</label>
            <input 
                type='email'
                id='email'
                required
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                    setIdError(false);
                }}
            />
            <p className='warning'>{idError ? idError : null}</p>
        </div>
        <div>
            <label htmlFor='password'>비밀번호</label>
            <input 
                type='password'
                id='password'
                required
                value={password}
                onChange={
                    (e)=>{
                        setPassword(e.target.value)
                        setPasswordError(false)
                    }
                }
            />
            <p className='warning'>{passwordError ? passwordError : null}</p>
        </div>
        <div>
            <label htmlFor='cf-password'>비밀번호 확인</label>
            <input 
                type='password'
                id='cf-password'
                required
                value={cfPassword}
                onChange={(e)=>{setCfPassword(e.target.value)}}
            />
        </div>
        <button
            type='submit'
            className='submit'
        >회원가입</button>
      </form>
    </div>
  )
}

export default SignUp
