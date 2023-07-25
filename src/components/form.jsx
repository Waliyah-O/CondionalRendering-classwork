import { useReducer, useState } from "react";
import formReducer from "../reducers/formReducer";
import { ACTIONS } from "../reducers/formReducer";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  showNextParts: false,
  showAll: false,
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  //   const [info, setInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.firstName !== "" && state.lastName !== "") {
      dispatch({ type: ACTIONS.SHOW_NEXT_PARTS });
    } else {
      alert("sup!");
    }
  };

  const showAll = (e) => {
    e.preventDefault();
    if (state.showNextParts === true) {
      dispatch({ type: ACTIONS.SHOW_ALL });
    } else {
      alert("hmmmmmmmm!!!");
    }
  };

  //   console.log(state);

  function changeFIrstName(e) {
    dispatch({ type: ACTIONS.ADD_FIRSTNAME, payload: e.target.value });
  }
  function changeLastName(e) {
    dispatch({ type: ACTIONS.ADD_LASTNAME, payload: e.target.value });
  }
  function changeEmail(e) {
    dispatch({ type: ACTIONS.ADD_EMAIL, payload: e.target.value });
  }
  function changePassword(e) {
    dispatch({ type: ACTIONS.ADD_PASSWORD, payload: e.target.value });
  }

  return (
    <>
      <form>
        <div
          style={{
            display: state.showNextParts ? "none" : "block",
          }}
        >
          <div
            style={{
              marginBottom: "2em",
            }}
          >
            <label htmlFor="firstName">first name</label>
            <input
              onInput={changeFIrstName}
              type="text"
              value={state.firstName}
            />{" "}
            <br />
            <label htmlFor="firstName">first name</label>
            <input
              onInput={changeLastName}
              type="text"
              value={state.lastName}
            />
          </div>
          <button onClick={handleSubmit}>next</button>
        </div>
        {state.showNextParts ? (
          <div
            style={{
              marginBottom: "2em",
              display: state.showAll ? "none" : "block",
            }}
          >
            <label htmlFor="email">email</label>
            <input onInput={changeEmail} type="text" value={state.email} />{" "}
            <br />
            <label htmlFor="password">password</label>
            <input
              onInput={changePassword}
              type="text"
              value={state.password}
            />{" "}
            <button onClick={showAll}>submit</button>
          </div>
        ) : null}
        {state.showAll ? (
          <div>
            <p>{state.firstName}</p>
            <p>{state.lastName}</p>
            <p>{state.email}</p>
            <p>{state.password}</p>
          </div>
        ) : null}
      </form>
    </>
  );
};

export default Form;
