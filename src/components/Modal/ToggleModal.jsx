import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

const ToggleModal = ({toggleModalShow, setToggleModalShow}) => {
  console.log(toggleModalShow);

  return (
    <> 
      <div className={toggleModalShow? 'ToggleModal on' : 'ToggleModal off'} >
        <div className='content'>
          <div className='inner'>
            <IoCloseOutline className='btn-close' onClick={()=>{setToggleModalShow(false)}}/>
            <h1 className='logo'>movie</h1>
            <div className='btnWrap'>
              <button 
                className='btn-login'
                onClick={()=>{window.location.href = '/login'}}
              >로그인</button>
              <button 
                className='btn-signup'
                onClick={()=>{window.location.href = '/signup'}}
              >회원가입</button>
            </div>
          </div>
        </div>
      </div>
      <div className={toggleModalShow? 'toggleBg on' : 'toggleBg off'} onClick={()=>{setToggleModalShow(false)}}/>
    </>
  )
}

export default ToggleModal
