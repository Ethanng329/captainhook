import React from "react";
import { Dog } from "./Dog/Dog";
import { Cat } from "./Cat/Cat";
import { SearchBar } from "./Searchbar/SearchBar";

import "./App.css";
import styled from "styled-components";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  return (
    <div>
      <header>
        <SearchBar />
      </header>
      <SectionContainer>
        <Dog />
        <Cat />
      </SectionContainer>
    </div>
  );
}

export default App;
