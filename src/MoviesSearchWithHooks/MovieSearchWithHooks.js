import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(193, 180, 247);
`;

export const MovieSearchWithHooks = () => {
  const [inputString, setInputString] = useState("");
  const [timer, setTimer] = useState(0);

  const handleOnChange = event => setInputString(event.target.value);

  const startClock = stop => {
    let newTimer = timer;
    const timerID = setInterval(() => setTimer(newTimer + 1), 2000);
    if (stop === "stop") {
      clearInterval(timerID);
    }
  };

  useEffect(() => {
    console.log("effect");
    return console.log("return effect");
  });

  // useEffect(() => {
  //   const timerID = setInterval(() => setTimer(timer + 1), 1000);
  //   return clearInterval(timerID);
  // });

  return (
    <StyledContainer>
      {console.log("render")}
      <form>
        <TextField
          id="outlined-name"
          label="Search Bar"
          margin="normal"
          variant="outlined"
          name="searchstring"
          value={inputString}
          onChange={handleOnChange}
        />
      </form>
      <p>{timer}</p>
      <button onClick={() => startClock()}>start</button>
      <button onClick={() => setTimer(0)}>stop</button>
      <button onClick={() => setTimer(0)}>clear</button>
      <div>Hooks</div>
    </StyledContainer>
  );
};
