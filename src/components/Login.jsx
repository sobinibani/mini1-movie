import React from 'react'
import { useState } from 'react';
import app from '../firebase'
import { useNavigate } from 'react-router-dom';
import {
  getAuth, 
  signInWithPopup, 

  GoogleAuthProvider, 
  GithubAuthProvider,
  OAuthProvider,
  signInWithEmailAndPassword,

  signOut
} from 'firebase/auth';

const SignUp = () => {
  const navigate = useNavigate();

  // 회원 로그인
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem('userData', JSON.stringify(result.user));
      navigate(`/`)
    } catch (error) {
      const { code, message } = error;
      console.log('로그인 실패:', code, message);
      setLoginError('이메일 및 비밀번호가 올바르지 않습니다.');
    }
  };

  // 소셜로그인
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const micProvider = new OAuthProvider('microsoft.com');

  const handleAuth = (type) => {
    signInWithPopup(auth, type)
    .then((result)=>{
      localStorage.setItem('userData', JSON.stringify(result.user));
      navigate(`/`);
    })
    .catch((error)=>{
      console.log('error',error)
      setLoginError('이메일 및 비밀번호가 올바르지 않습니다.');
    })
  }


  return (
    <div className='Login'>
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div>
            <label htmlFor='email'>이메일</label>
            <input 
                type='text'
                id='email'
                required
                placeholder='이메일을 입력하세요.'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor='password'>비밀번호</label>
            <input 
                type='password'
                id='password'
                required
                placeholder='비밀번호를 입력하세요.'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <p className="warning">{loginError ? loginError : null}</p>
        <button
            type='submit'
            className='submit'
        >로그인</button>
      </form>

      <div className='social-login'>
          <button onClick={()=>{handleAuth(googleProvider)}}>구글 로그인</button>
          <button onClick={()=>{handleAuth(gitProvider)}}>깃허브 로그인</button>
          <button onClick={()=>{handleAuth(micProvider)}}>마이크로소프트 로그인</button>
      </div>
    </div>
  )
}

export default SignUp
