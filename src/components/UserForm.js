import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ getAnswer, textBoxRef, isTimeRunning }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    getAnswer(answer.trim(" ").toLowerCase());
    setAnswer("");
    textBoxRef.current.focus();
  };

  return (
    <div className="form-container">
      <form onSubmit={e => handleSubmit(e)}>
        <h4 className="form-title">Can you name all of the states?</h4>
        <input
          className="form-field"
          ref={textBoxRef}
          type="text"
          name="answer"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
          disabled={!isTimeRunning}
          required
        />
        <small className="form-subtitle">
          Types of celery are NOT permitted
        </small>
        <button className="form-btn-submit" disabled={!isTimeRunning}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

UserForm.propTypes = {
  getAnswer: PropTypes.func.isRequired,
  textBoxRef: PropTypes.object.isRequired,
  isTimeRunning: PropTypes.bool.isRequired,
};

export default UserForm;
