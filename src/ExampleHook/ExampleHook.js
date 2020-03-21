import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Button from "@material-ui/core/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: rgb(193, 180, 247);
`;

const ButtonWrapper = styled.div`
  align-self: center;
`;

function longResolve() {
  return new Promise(res => {
    setTimeout(res, 4000);
  });
}

export const ExampleHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    longResolve().then(() => alert(count));
  }, []);

  return (
    <Container>
      <ButtonWrapper>
        <Button
          size="large"
          variant="outlined"
          color="secondary"
          onClick={() => setCount(count + 1)}
        >
          click me:{count}
        </Button>
      </ButtonWrapper>
    </Container>
  );
};
