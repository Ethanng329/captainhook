import React from "react";

import { MovieSearchWithHooks } from "./MoviesSearchWithHooks/MovieSearchWithHooks";
import { MovieSearchWithClass } from "./MovieSearchWithClass/MovieSearchWithClass";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <SectionContainer>
      <MovieSearchWithHooks />
      <MovieSearchWithClass />
    </SectionContainer>
  );
}

export default App;
