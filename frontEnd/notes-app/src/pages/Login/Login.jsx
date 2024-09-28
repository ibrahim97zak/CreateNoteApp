import { useState } from "react";
import PasswordInput from "../../components/input/PasswordInput";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { emailValidator } from "../../utils/helper";
import InputField from "../../components/input/InputField";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleLogin = async(e)=>{
        e.preventDefault();
        if(!emailValidator(email)){
          console.log(emailValidator(email))
            setError("pleast enter a valid Email");
            return
        }
        if(!password){
            setError("Please enter a password");
            return
        }
        setError("")
    }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleLogin}>
            <h4 className="text-2xl mb-7">Login</h4>
            <br />
            <InputField
            type={"email"}
            placeholder={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <PasswordInput value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <br />
            {error && <p className="text-red-600 text-xs pb-1">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              not registerd yet? {" "}
              <Link to="/signUp" className="font-medium text-primary underline">
                create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
