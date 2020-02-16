import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: green;
  flex: 1;
`;

export const Cat = () => {
  return (
    <Container>
      <p>Cat</p>
    </Container>
  );
};
