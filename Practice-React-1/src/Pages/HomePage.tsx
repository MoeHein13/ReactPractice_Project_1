import { useState } from "react";
import Modal from "../Components/Modal";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const [openModal, setOpenmodal] = useState<boolean>(false);

  const navigate = useNavigate();

  const clickModal: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOpenmodal((prevState) => !prevState);
  };
  const closeModal = () => {
    console.log("close modal is called");
    setOpenmodal(false);
  };

  const buttonClick = (path: string) => {
    navigate(path);
  };

  const buttonLabels = [
    {
      label: "Practice List",
      path: "list",
    },
    {
      label: "Practice Table",
      path: "table",
    },
    {
      label: "Practice Counter",
      path: "counter",
    },
  ];
  const renderLabels = buttonLabels.map((button) => {
    return (
      <button
        key={button.label}
        className="border border-amber-50 bg-blue-500 p-2 
        rounded-xl font-semibold text-white cursor-pointer hover:bg-blue-700"
        onClick={() => buttonClick(button.path)}
      >
        {button.label}
      </button>
    );
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-emerald-100 overflow-auto">
      <div
        className=" border rounded-2xl border-black
       bg-gray-200 p-3 flex flex-col  min-h-80 min-w-[500px] justify-between"
      >
        <div className="text-center font-semibold text-3xl mb-5">
          Practice Project 1
        </div>
        <div className="flex items-center justify-center space-x-4 ">
          <div className="font-semibold ">For the Project Detail</div>
          <button
            onClick={clickModal}
            className="cursor-pointer text-blue-700 font-semibold underline "
          >
            Click Here
          </button>
          {openModal && <Modal closeModal={closeModal} />}
        </div>
        <div className="flex justify-between">{renderLabels}</div>
      </div>
    </div>
  );
};

export default HomePage;
