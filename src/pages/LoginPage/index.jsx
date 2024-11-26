import Login from "../../components/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="loginWrap">
      <Login />
      <p className="else">
        <Link to="/signup">회원가입</Link>
      </p>
    </div>
  );
};

export default LoginPage;
