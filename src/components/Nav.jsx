import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  
  // 검색 input 이벤트
  const [searchValue, setSearchValue] = useState('');
  const handleChange = (e)=> {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)
  }
  
  //스크롤
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) { // 스크롤 위치가 50px 이상일 때 배경색 변경.
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  return (
    <header className={` ${isScrolled ? 'scrolled' : ''}`}>
      <div className='inner'>
        <div className='left-wrap'>
          <h1
            className='logo'
            onClick={()=>{window.location.href = '/'}}
          >movie</h1>
          <div className='search lg-only'>
            <input
              type='text'
              placeholder='어떤 영화를 찾으세요?'
              value={searchValue}
              onChange={handleChange}
            />
            <button>
              <CiSearch className='icon'/>
            </button>
          </div>
        </div>
        <div className='btn-wrap'>
          <div className='lg-only'>
            <button 
              className='signup'
              onClick={()=>{window.location.href = '/signup'}}
            >회원가입</button>
            <button 
              className='login'
              onClick={()=>{window.location.href = '/login'}}
            >로그인</button>
          </div>
          <div className='lg-hidden'>
            <button className='toggle-menu lg-hidden'><IoSearch/></button>
            <button className='toggle-menu lg-hidden'><MdMenu /></button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav
