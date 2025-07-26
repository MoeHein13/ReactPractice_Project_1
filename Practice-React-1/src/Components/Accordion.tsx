import React, { useState } from "react";
import { ArrowBigDownDash, ArrowBigLeftDash } from "lucide-react";
type ModalListProp = {
  modalList: {
    id: number;
    header: string;
    detail: string;
  }[];
};
const Accordion: React.FC<ModalListProp> = ({ modalList }) => {
  const [isexpanded, setIsexpanded] = useState(-1);

  const clickExpand = (listindex: number) =>
    listindex === isexpanded ? setIsexpanded(-1) : setIsexpanded(listindex);

  const renderList = modalList.map((list, index) => {
    const expand = isexpanded === index;
    const icons = expand ? (
      <ArrowBigDownDash color="#2b2bee" />
    ) : (
      <ArrowBigLeftDash color="#2b2bee" />
    );
    return (
      <div key={list.id} className="border-b-2 p-1 bg-gray-100  ">
        <div
          className="flex flex-col justify-between mb-1 font-bold"
          onClick={() => clickExpand(index)}
        >
          <div className="flex justify-between items-center cursor-pointer">
            {list.header}
            {icons}
          </div>
        </div>

        <div>
          {expand && (
            <div className="bg-orange-100 font-semibold">{list.detail}</div>
          )}
        </div>
      </div>
    );
  });

  return <div>{renderList}</div>;
};

export default Accordion;
