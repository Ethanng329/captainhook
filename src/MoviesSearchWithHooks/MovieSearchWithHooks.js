import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { dataFetchHelper } from "../service";
import { Container } from "../MovieSearchWithClass/MovieSearchWithClass";
import { MovieCard } from "../MovieCard/MovieCard";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(193, 180, 247);
`;

const logFlag = true;

export const MovieSearchWithHooks = () => {
  const [inputString, setInputString] = useState("");
  const [data, setData] = useState([]);
  // const [timer, setTimer] = useState(0);

  const handleOnChange = event => setInputString(event.target.value);

  // const startClock = stop => {
  //   let newTimer = timer;
  //   const timerID = setInterval(() => setTimer(newTimer + 1), 2000);
  //   if (stop === "stop") {
  //     clearInterval(timerID);
  //   }
  // };

  const handleSubmit = event => {
    event.preventDefault();
    dataFetchHelper(inputString)
      .then(res => setData(res.Search))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (logFlag) console.log("effect - hook");
    return logFlag ? console.log("cleanup effect -hook") : console.log();
  });

  // useEffect(() => {
  //   const timerID = setInterval(() => setTimer(timer + 1), 1000);
  //   return clearInterval(timerID);
  // });

  return (
    <StyledContainer>
      {logFlag && console.log("render - Hook")}
      <p>Hooks</p>
      <form onSubmit={handleSubmit}>
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
      <Container>
        {data &&
          data.map((item, index) => (
            <MovieCard key={index + "hook"} data={item} />
          ))}
      </Container>
      {/* <p>{timer}</p>
      <button onClick={() => startClock()}>start</button>
      <button onClick={() => setTimer(0)}>stop</button>
      <button onClick={() => setTimer(0)}>clear</button> */}
    </StyledContainer>
  );
};
