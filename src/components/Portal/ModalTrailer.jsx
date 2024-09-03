import { createPortal } from "react-dom";
import { RxCross2 } from "react-icons/rx";

export default function ModalTrailer({closeModalHandler , showModal}) {

    const closeModal = () => {
        closeModalHandler(false)
    }
  return createPortal(
    <div className={`z-[100] fixed top-0 left-0 right-0 h-[100vh] bg-[#00000090] flex items-center justify-center transition-all duration-300 ${showModal ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className="bg-[#191818] sm:h-[400px] sm:w-[700px] sm:mx-auto rounded-xl text-right absolute top-32">
        <button 
            onClick={closeModal}
            className="m-3">
            <RxCross2 className="sm:text-3xl" />
        </button>
        <div className="mx-5 mb-5 sm:mx-0 sm:mb-0 sm:flex sm:items-center sm:justify-center">
            <iframe
            className="rounded-lg sm:h-[315px] sm:w-[560px]"
            src="https://www.youtube.com/embed/98YEaUD8MuU?si=dADQOqQolxJ5jBfN"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}   
