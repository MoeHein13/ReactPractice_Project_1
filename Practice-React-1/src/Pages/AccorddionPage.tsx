import Accordion from "../Components/Accordion";

const AccorddionPage: React.FC = () => {
  const modalList = [
    {
      id: 1,
      header: "Project Overall",
      detail:
        "This project is just for the practice using Typescript language along with the libraries such as React,Tailwind Css,React Router. Also includes features like accordion, table,list,modal",
    },
    {
      id: 2,
      header: "Practice List",
      detail:
        "Practice List is just render the normal list from the fake API created by ChatGPT and stored as Json. It will render the specific item depending on the category that user select. Using Some",
    },
    {
      id: 3,
      header: "Practice Table",
      detail:
        "Practice Table is to render the data from the normal Json file in the table format just to practice the table and sorting method",
    },
    {
      id: 4,
      header: "Practice Counter",
      detail:
        "Practice counter is basically to practice the useReducer hooks along with Typescript. Just the normal counter but with some add one function with form and input event handler",
    },
  ];

  return (
    <div>
      <Accordion modalList={modalList} />
    </div>
  );
};

export default AccorddionPage;
