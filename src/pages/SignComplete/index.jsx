import React from 'react'
import image from '../../images/signup.png'
import { useNavigate } from 'react-router-dom'

const SignComplete = () => {
  const navigate = useNavigate();
  return (
    <div className='content-center'>
      <img src={image} className='mb30' alt="" aria-hidden/>
      <p className='mb30'>회원가입이 완료 되었습니다!</p>
      <div className='flex-wrap gap10'>
        <button 
          className='btn-type1'
          onClick={()=>{navigate(`/login`)}}
        >로그인</button>
        <button 
          className='btn-type1'
          onClick={()=>{navigate(`/`)}}
        >메인페이지</button>
      </div>
    </div>
  )
}

export default SignComplete
