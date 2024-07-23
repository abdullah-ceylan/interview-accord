import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";


const Question = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="card-group">
      {show ? (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            <button>{<FcExpand />}</button>
          </div>
          <p>{answer}</p>
        </div>
      ) : (
        <div className="card">
          <div className="ques">
            <h5>
              {id}.{question}
            </h5>
            <button>{<FcCollapse />}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
