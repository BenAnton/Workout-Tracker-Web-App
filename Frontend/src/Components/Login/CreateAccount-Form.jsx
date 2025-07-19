import "./CreateAccount-Form.css";
import React, { useState } from "react";
import CreateUser from "./CreateUser";

function CreateAccountForm() {
  const [edit, setEdit] = useState(false);

  const handleGetStarted = async (e) => {
    e.preventDefault();
    setEdit(true);
  };

  return (
    <>
      <form className="Create-Form-Cont">
        <button className="Create-Button" onClick={handleGetStarted}>
          Get Started...
        </button>
      </form>

      {edit && <CreateUser setEdit={setEdit} />}
    </>
  );
}

export default CreateAccountForm;
