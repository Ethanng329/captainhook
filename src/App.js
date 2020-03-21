import React from "react";

import { MovieSearchWithHooks } from "./MoviesSearchWithHooks/MovieSearchWithHooks";
import { MovieSearchWithClass } from "./MovieSearchWithClass/MovieSearchWithClass";
import { TimerWithHooks } from "./TimerWithHooks/TimerWithHooks";
import { TimerWithClass } from "./TimerWithClass/TimerWithClass";
import { ExampleClass } from "./ExampleClass/ExampleClass";
import { ExampleHook } from "./ExampleHook/ExampleHook";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const logFlag = true;

export function log(message) {
  if (logFlag) {
    console.log(message);
  }
}

function App() {
  return (
    <SectionContainer>
      {/* <MovieSearchWithHooks /> */}
      {/* <MovieSearchWithClass /> */}
      {/* <TimerWithHooks /> */}
      <TimerWithClass />
      {/* <ExampleClass /> */}
      {/* <ExampleHook /> */}
    </SectionContainer>
  );
}

export default App;
