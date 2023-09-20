import { useState, useRef } from "react";
import useJokeGenerator from "./useJokeGenerator";

const JokeGeneratorComponent = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const joke = useJokeGenerator(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };
  return (
    <div>
      <center>Joke Generator</center>
      <h2>{joke}</h2>
      <form>
        <input placeholder="First Name"  ref={firstNameRef} />
        <input placeholder="Last Name" ref={lastNameRef} />
        <button onClick={generateJoke}>Generate Joke</button>
      </form>
    </div>
  );
};

export default JokeGeneratorComponent;
