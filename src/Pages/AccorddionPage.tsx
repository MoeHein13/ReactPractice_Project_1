import Accordion from "../Components/Accordion";

const AccorddionPage: React.FC = () => {
  const modalList = [
    {
      id: 1,
      header: "Project Overall",
      detail:
        "This project is just for the practice using Typescript language along with the libraries such as React,Tailwind Css,React Router. Also includes features like accordion,modal with createPortal",
    },

    {
      id: 2,
      header: "Practice Counter",
      detail:
        "Practice counter is basically to practice the useReducer hooks along with Typescript. Just the normal counter and additional function with form and input event handler",
    },
  ];

  return (
    <div>
      <Accordion modalList={modalList} />
    </div>
  );
};

export default AccorddionPage;
