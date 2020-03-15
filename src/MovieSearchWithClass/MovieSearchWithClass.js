import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { MovieCard } from "../MovieCard/MovieCard";
import { dataFetchHelper } from "../service";

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

const logFlag = true;

export class MovieSearchWithClass extends React.Component {
  constructor() {
    super();
    this.state = {
      inputString: "",
      data: []
    };
  }

  componentDidMount() {
    if (logFlag) console.log("didMount - class");
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
    if (logFlag) console.log("render -Class");
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
        {/* <p>{this.state.timer}</p>
        <button onClick={this.handleonClick}>start</button>
        <button onClick={() => this.handleonClick("stop")}>stop</button>
        <button onClick={() => this.setState({ timer: 0 })}>clear</button> */}
      </StyledContainer>
    );
  }
}
