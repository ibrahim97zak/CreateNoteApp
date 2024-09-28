import ProfileInfo from "../card/profileInfo"
import { useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [SearchValue,setSearchValue] =useState("")
  const handelSearch = () => {

  }
  const onClearSearch=()=>{
    setSearchValue("");
  }

  const onLogout=()=>{
    navigate("/login")
  }
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py2">Notes</h2>
        <SearchBar
        value={SearchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
        onClearSearch={onClearSearch}
        handelSearch={handelSearch}
        />
        <ProfileInfo onLogout={onLogout}/>
    </div>
  )
}

export default Navbar