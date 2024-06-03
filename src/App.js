import { Outlet, Route, Routes } from "react-router-dom";

import './App.css';
import Nav from './components/Nav';
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

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
          <Route index element={<LoginPage/>}/>
          <Route path="main" element={<MainPage/>}/>
          <Route path="detail" element={<DetailPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
