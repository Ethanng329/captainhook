import React from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: rgb(247, 185, 185);
`;

const ButtonWrapper = styled.div`
  align-self: center;
`;

function longResolve() {
  return new Promise(res => {
    setTimeout(res, 4000);
  });
}

export class ExampleClass extends React.Component {
  state = { count: 0 };
  componentDidMount() {
    longResolve().then(() => alert(this.state.count));
  }

  render() {
    return (
      <Container>
        <ButtonWrapper>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onClick={() =>
              this.setState(prevState => ({
                count: prevState.count + 1
              }))
            }
          >
            click me:{this.state.count}
          </Button>
        </ButtonWrapper>
      </Container>
    );
  }
}
