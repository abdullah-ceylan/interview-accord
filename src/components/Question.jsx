import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";


const Question = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);

  // const handleToggle = () => {
  //   if(show){
  //     setShow(false) if else yapısıyla da Toggle yapılabilir.
  //   }else{
  //     setShow(true)
  //   }
    //! setShow(!show) en kısa ve kullanisli yöntem bu
  // }

  return (
    <div className="card-group">
      {show ? (
        <div className="card">
          <div className="ques-answer">
            <h5>
              {id}.{question}
            </h5>
            <button onClick={() => setShow(false)}>{<FcCollapse />}</button>
          </div>
          <p>{answer}</p>
        </div>
      ) : (
        <div className="card">
          <div className="ques">
            <h5>
              {id}.{question}
            </h5>
            <button onClick={() => setShow(true)}>{<FcExpand />}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
