import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import InputField from "../../components/input/InputField"
import { useState } from "react"
import PasswordInput from "../../components/input/PasswordInput"
import { emailValidator } from "../../utils/helper"

const SignUp = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(null);
  const handleSignUp=(e)=>{
    e.preventDefault();
    if(!name){
      setError("Please enter your name");
      return
    }
    else if(!emailValidator(email)){
      setError("please inter a valid email")
      return
    }else if(!password){
      setError("Please enter your password")
      return
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp} >
            <h4 className="text-2xl mb-7">Sign Up</h4>
            <br />
            <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <br />
            <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <br />
            {error && <p className="text-red-600 text-xs pb-1">{error}</p>}
             <button type="submit" className="btn-primary">
              Create An Account
            </button>
            <p className="text-sm text-center mt-4">
              are you allready registerd? {" "}
              <Link to="/login" className="font-medium text-primary underline">
                SignIn
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp