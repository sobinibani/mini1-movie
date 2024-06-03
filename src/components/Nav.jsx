import './Nav.scss'

function Nav() {
  return (
    <header>
      <div className='inner'>
        <h1
          className='logo'
          onClick={()=>{window.location.href = '/main'}}
        >movie</h1>
        <button 
          className='login'
        >로그인</button>
      </div>
    </header>
  )
}

export default Nav
