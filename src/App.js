import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
// import './style.css';
import './styles/main.scss'
import Nav from './components/Nav';
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage"
import SignUpPage from "./pages/SignUpPage";
import SignCompletePage from "./pages/SignComplete";
import LoginPage from "./pages/LoginPage";


const Layout = () => {

  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

function App() {
  const location = useLocation();
  const main = location.pathname === '/';

  return (
    <div className={`App ${main ? 'main' : 'page'}`}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="/movie/:id" element={<DetailPage/>}/>
          <Route path='search' element={<SearchPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/signComplete" element={<SignCompletePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
