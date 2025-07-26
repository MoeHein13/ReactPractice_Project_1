import ReactDOM from "react-dom";

import AccorddionPage from "../Pages/AccorddionPage";

type props = {
  closeModal: () => void;
};
function Modal({ closeModal }: props) {
  // Create modal container if it doesn't exist
  let modalContainer = document.querySelector(".modal-container");
  if (!modalContainer) {
    modalContainer = document.createElement("div");
    modalContainer.className = "modal-container";
    document.body.appendChild(modalContainer);
  }

  const backgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-amber-50 opacity-80"
        onClick={backgroundClick}
      ></div>
      <div className="fixed inset-[350px] flex items-center justify-center ">
        <div className="bg-gray-50 p-4 min-w-[400px]  rounded-lg shadow-lg max-w-lg opacity-100 border-black">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Click Each Topic For Details
            </h2>
            <div>
              <AccorddionPage />
            </div>
            <button
              className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalContainer
  );
}

export default Modal;
