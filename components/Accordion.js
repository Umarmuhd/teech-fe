import { useState } from "react";
const Accordion = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question">
      <header className="flex">
        <h4 onClick={() => setExpanded(!expanded)} className="text-base">
          {title}
        </h4>
        <button className="btn ml-2" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <img src="/icons/minus-circle.svg" alt="minus" />
          ) : (
            <img src="/icons/plus-circle.svg" alt="plus" />
          )}
        </button>
      </header>
      {expanded && <p className="px-4 pt-2 text-lightBlack">{info}</p>}
    </article>
  );
};

export default Accordion;
