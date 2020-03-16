import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { dataFetchHelper } from "../service";
import { Container } from "../MovieSearchWithClass/MovieSearchWithClass";
import { MovieCard } from "../MovieCard/MovieCard";
import { log } from "../App";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(193, 180, 247);
`;

export const MovieSearchWithHooks = () => {
  const [inputString, setInputString] = useState("");
  const [data, setData] = useState([]);

  function handleOnChange(event) {
    setInputString(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    dataFetchHelper(inputString)
      .then(res => setData(res.Search))
      .catch();
  };

  useEffect(() => {
    log("effect - hook");
    return log("cleanup effect -hook");
  });

  return (
    <StyledContainer>
      {log("render - Hook")}
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
    </StyledContainer>
  );
};
