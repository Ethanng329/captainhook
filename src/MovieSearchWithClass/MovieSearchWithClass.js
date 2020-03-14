import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { MovieCard } from "../MovieCard/MovieCard";
import { dataFetchHelper } from "../service";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: rgb(247, 185, 185);
`;

const Container = styled.div`
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
      .catch(err => console.log(err));
  };

  // handleonClick = stop => {
  //   if (stop !== "stop") {
  //     clearInterval(this.id);
  //     this.setState(prevState => {
  //       this.id = setInterval(
  //         () => this.setState({ timer: prevState.timer++ }),
  //         1
  //       );
  //     });
  //   } else {
  //     clearInterval(this.id);
  //   }
  // };

  render() {
    console.log(this.state);
    return (
      <StyledContainer>
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
          {this.state.data.map((item, index) => (
            <MovieCard image={item} key={`card-${index}`} />
          ))}
        </Container>
        {/* <p>{this.state.timer}</p>
        <button onClick={this.handleonClick}>start</button>
        <button onClick={() => this.handleonClick("stop")}>stop</button>
        <button onClick={() => this.setState({ timer: 0 })}>clear</button> */}
        <div>Class</div>
      </StyledContainer>
    );
  }
}
