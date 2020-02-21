import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(193, 180, 247);
`;

export const MovieSearchWithHooks = () => {
  const [inputString, setInputString] = useState("");

  const handleOnChange = event => setInputString(event.target.value);

  return (
    <StyledContainer>
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
      <div>Hooks</div>
    </StyledContainer>
  );
};
