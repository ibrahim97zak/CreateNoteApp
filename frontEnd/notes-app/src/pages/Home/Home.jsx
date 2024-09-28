import NoteCards from "../../components/card/NoteCards";
import Navbar from "../../components/Navbar/Navbar";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import { useState } from "react";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  return (
    <>
      <Navbar />
      <div className=" container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCards
            title={"do fajr prayer at 4am"}
            date={"7th oct"}
            content={"do fajr prayer at 4am every day"}
            tags={"#PRAYERS"}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
            setOpenAddEditModal({isShown:true,type:"add",data:null})
        }}
      >
        <MdAdd className="text-{32px} text-white" />
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        }}
        contentLabek=""
        className="modal-style"
      >
        <AddEditNotes />
      </Modal>
    </>
  );
};

export default Home;
