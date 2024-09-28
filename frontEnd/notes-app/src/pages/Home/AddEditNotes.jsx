import TagInput from "../../components/input/TagInput";

const AddEditNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="go to the gym"
        />
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <label className="input-label">CONTENT</label>
        <textarea type="text"
        className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded" 
        placeholder="content"
        rows={10}/>
        <div className="mt-3">
            <label className="input-label">TAGS</label>
            <TagInput/>
        </div>
        <button className="btn-primary font-medium mt-5 p-3 "
        onClick={()=>{}}>
            Add
        </button>
      </div>
    </div>
  );
};

export default AddEditNotes;
