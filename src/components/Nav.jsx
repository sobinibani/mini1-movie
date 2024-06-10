import { useState, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import {getAuth,signOut, onAuthStateChanged} from 'firebase/auth';

import SearchModal from './Modal/SearchModal';

function Nav() {
  const navigate = useNavigate();

  //로그인 했는지?
  const [userData,setUserData] = useState(null);
  // const initailUserData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {}
  const auth = getAuth();
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true);
        setUserData(JSON.parse(localStorage.getItem('userData')));
      } else {
        setLogin(false);
      }
      setLoading(false); // 로딩 완료
    });

  }, [auth, navigate]);

  
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


  // 로그아웃
  const handleLogout = () => {
    signOut(auth)
    .then(()=>{
      setUserData({});
      setLogin(false);
      localStorage.removeItem('userData');
    })
    .catch((error)=>{
      console.log('error',error)
    })
  }

  //반응형 모달
  const [searchModal,setSearchModal] = useState(false);

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
        {loading ? null :         
          <div className='btn-wrap lg-only'>
            {login ? 
              <>
              {userData ? 
                (
                  <>
                    <p className='user-name'>
                      <span>{userData.displayName}</span> 님
                    </p>
                    <button 
                    className='logout'
                    onClick={handleLogout}
                    >로그아웃</button>
                  </>
                ) 
              : null}
              </>
            : 
              <>
                <button 
                  className='signup'
                  onClick={()=>{window.location.href = '/signup'}}
                >회원가입</button>
                <button 
                  className='login'
                  onClick={()=>{window.location.href = '/login'}}
                  // onClick={handleAuth}
                >로그인</button>
              </>
            }
          </div>
        }

        <div className='btn-wrap lg-hidden'>
          <button className='toggle-menu lg-hidden'>
            <IoSearch onClick={()=>{setSearchModal(true)}}/>
          </button>
          <button className='toggle-menu lg-hidden'><MdMenu /></button>
        </div>
      </div>
      
      {searchModal ? <SearchModal setSearchModal={setSearchModal}/> : null}
    </header>
  )
}

export default Nav
