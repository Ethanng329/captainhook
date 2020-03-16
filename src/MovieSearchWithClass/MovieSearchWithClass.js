import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { MovieCard } from "../MovieCard/MovieCard";
import { dataFetchHelper } from "../service";
import { log } from "../App";

export const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(247, 185, 185);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export class MovieSearchWithClass extends React.Component {
  constructor() {
    super();
    this.state = {
      inputString: "",
      data: []
    };
  }

  componentDidMount() {
    log("didMount - class");
  }

  componentDidUpdate() {
    log("did update -class");
  }

  handleOnChange = event =>
    this.setState({
      inputString: event.target.value
    });

  handleSubmit = event => {
    event.preventDefault();
    dataFetchHelper(this.state.inputString)
      .then(res => {
        this.setState({ data: res.Search });
      })
      .catch();
  };

  render() {
    log("render -Class");
    return (
      <StyledContainer>
        <p>Class</p>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-name"
            label="Search Bar"
            margin="normal"
            variant="outlined"
            value={this.state.inputString}
            onChange={this.handleOnChange}
          ></TextField>
        </form>
        <Container>
          {this.state.data &&
            this.state.data.map((item, index) => (
              <MovieCard data={item} key={`card-${index}`} />
            ))}
        </Container>
      </StyledContainer>
    );
  }
}
