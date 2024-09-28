import { FaMagnifyingGlass } from "react-icons/fa6"
import { IoMdClose } from "react-icons/io"

const SearchBar = ({value,onChange,handelSearch,onClearSearch}) => {
  return (
    <div className="w-80 flex items-center px-4 bg-slate-100 rounded-md">
        <input 
        type="text"
        className="w-full text-xs bg-transparent py-[11px] outline-none"
         value={value}
         onChange={onChange}
        placeholder="Search Notes"/>
        {value &&<IoMdClose
         className="text-xl mx-4 text-slate-500 hover:text-black cursor-pointer "
        onClick={onClearSearch}/>}
        
        <FaMagnifyingGlass className=" text-slate-400 cursor-pointer hover:text-black" onClick={handelSearch}/>
    </div>
  )
}

export default SearchBar