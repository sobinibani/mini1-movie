import { Outlet, Route, Routes } from "react-router-dom";

import './App.css';
import Nav from './components/Nav';
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SignUpPage from "./pages/SignUpPage";
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
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="/movie/:id" element={<DetailPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
