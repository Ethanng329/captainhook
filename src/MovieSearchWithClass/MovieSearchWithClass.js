import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(247, 185, 185);
`;

export class MovieSearchWithClass extends React.Component {
  constructor() {
    super();
    this.state = {
      inputString: ""
    };
  }

  handleOnChange = event =>
    this.setState({
      inputString: event.target.value
    });

  render() {
    return (
      <StyledContainer>
        <form>
          <TextField
            id="outlined-name"
            label="Search Bar"
            margin="normal"
            variant="outlined"
            value={this.state.inputString}
            onChange={this.handleOnChange}
          ></TextField>
        </form>
        <div>Class</div>
      </StyledContainer>
    );
  }
}
