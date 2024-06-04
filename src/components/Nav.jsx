import './styles/Nav.scss'

function Nav() {
  return (
    <header>
      <div className='inner'>
        <h1
          className='logo'
          onClick={()=>{window.location.href = '/'}}
        >movie</h1>
        <div className='btn-wrap'>
          <button 
            className='signup'
            onClick={()=>{window.location.href = '/signup'}}
          >회원가입</button>
          <button 
            className='login'
            onClick={()=>{window.location.href = '/login'}}
          >로그인</button>
        </div>
      </div>
    </header>
  )
}

export default Nav
