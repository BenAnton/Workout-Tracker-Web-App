import "./CreateAccount-Form.css";

function CreateAccountForm() {
  return (
    <>
      <form className="Create-Form-Cont">
        <input
          className="Create-Inputs"
          type="email"
          placeholder="Email"
        ></input>
        <input
          className="Create-Inputs"
          type="text"
          placeholder="Username"
        ></input>
        <input
          className="Create-Inputs"
          type="password"
          placeholder="Password"
        />
        <button className="Create-Button">Create Account</button>
      </form>
    </>
  );
}

export default CreateAccountForm;
