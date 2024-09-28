import {MdOutlinePushPin} from "react-icons/md"
import {MdCreate,MdDelete} from "react-icons/md"
const NoteCards = ({title,date,content,tags,isPinned,onEdit,onDelete,onPinNote}) => {


  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
        <div className="flex items-center justify-between">
            <div>
                <h6 className="text-sm font-medium">{title}</h6>
                <span className="text-xs text-slate-500">{date}</span>
            </div>
            <MdOutlinePushPin onClick={onPinNote}
            className={`{icon-btn ${isPinned? 'text-primary' : 'text-slate-300'}`}/>
        </div>
        <p className="text-xs text-slate-600 mt-2">{content?.slice(0,60)}</p>
        <div className="flext items-center justify-between mt-2 ">
            <div className="text-xs text-slate-500">{tags}</div>
            <div className="flex items-center gap-2">
                <MdCreate onClick={onEdit}
                 className=" icon-btn text-slate-500 hover:text-green-600"/>
                 <MdDelete onClick={onDelete}
                  className="icon-btn text-slate-500 hover:text-red-600"/>
            </div>
        </div>
    </div>
  )
}

export default NoteCards