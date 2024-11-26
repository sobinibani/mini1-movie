import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import {getAuth,signOut, onAuthStateChanged} from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';

import { useAuth, handleLogout } from '../hooks/useAuth';

import SearchModal from "./Modal/SearchModal";
import ToggleModal from "./Modal/ToggleModal";

function Nav() {  

  const navigate = useNavigate();

  //로그인 했는지?
  const login = useSelector(state => state.login.isLoggedIn);
  const userData = (useSelector(state => state.login.userData));
  console.log(userData)
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  useAuth();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setLogin(true);
  //       setUserData(JSON.parse(localStorage.getItem('userData')));
  //     } else {
  //       setLogin(false);
  //     }
  //     setLoading(false); // 로딩 완료
  //   });

  // }, [auth, navigate]);


  // 검색 input 이벤트
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  //스크롤
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        // 스크롤 위치가 50px 이상일 때 배경색 변경.
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 로그아웃
  // const handleLogout = () => {
  //   signOut(auth)
  //   .then(()=>{
  //     setUserData({});
  //     setLogin(false);
  //     localStorage.removeItem('userData');
  //   })
  //   .catch((error)=>{
  //     console.log('error',error)
  //   })
  // }


  //반응형 - 검색 모달
  const [searchModal, setSearchModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const moviePage = location.pathname.startsWith("/movie/");
    if (moviePage) {
      setSearchModal(false);
    }
  }, [location.pathname]);

  //반응형 - 토글 모달
  const [toggleModalShow, setToggleModalShow] = useState(false);

  return (
    <header className={` ${isScrolled ? "scrolled" : ""}`}>
      <div className="inner">
        <div className="left-wrap">
          <h1
            className="logo"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            movie
          </h1>
          <div className="search lg-only">
            <input
              type="text"
              placeholder="어떤 영화를 찾으세요?"
              value={searchValue}
              onChange={handleChange}
            />
            <button>
              <CiSearch className="icon" />
            </button>
          </div>
        </div>
     
          <div className='btn-wrap lg-only'>
            {login ? 
              <>
                {userData ? (
                  <>
                    <p className="user-name">
                      <span>{userData.displayName}</span> 님
                    </p>
                    <button 
                    className='logout'
                    onClick={()=>{handleLogout(dispatch)}}
                    >로그아웃</button>
                  </>
                ) : null}
              </>
            ) : (
              <>
                <button
                  className="signup"
                  onClick={() => {
                    window.location.href = "/signup";
                  }}
                >
                  회원가입
                </button>
                <button
                  className="login"
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                  // onClick={handleAuth}
                >
                  로그인
                </button>
              </>
            )}
          </div>
        

        <div className='btn-wrap lg-hidden'>
          <button className='toggle-menu lg-hidden'>
            <IoSearch onClick={()=>{setSearchModal(true)}}/>
          </button>
          <button className='toggle-menu lg-hidden'>
            <MdMenu onClick={()=>{setToggleModalShow(true)}}/>
          </button>
        </div>
      </div>
      
      {searchModal ? <SearchModal setSearchModal={setSearchModal}/> : null}
      <ToggleModal toggleModalShow={toggleModalShow} setToggleModalShow={setToggleModalShow}/>
    </header>
  );
}

export default Nav;
