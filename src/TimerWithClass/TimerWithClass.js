import React from "react";
import Button from "@material-ui/core/Button";

import { StyledContainer } from "../MovieSearchWithClass/MovieSearchWithClass";
import { log } from "../App";

export class TimerWithClass extends React.Component {
  state = {
    timer: 0
  };

  componentDidMount() {
    log("TimerDidMount - Class");
  }

  componentDidUpdate() {
    log("update - Class");
  }

  handleOnClick = stop => {
    if (stop !== "stop") {
      clearInterval(this.id);
      this.setState(prevState => {
        this.id = setInterval(
          () => this.setState({ timer: prevState.timer++ }),
          1000
        );
      });
    } else {
      clearInterval(this.id);
    }
  };

  handleReset = () => this.setState({ timer: 0 });

  render() {
    log("render -class");
    return (
      <StyledContainer>
        <p>Class</p>
        <p>{this.state.timer} s</p>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={this.handleOnClick}
        >
          start
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => this.handleOnClick("stop")}
        >
          stop
        </Button>
        <Button variant="contained" size="small" onClick={this.handleReset}>
          reset
        </Button>
      </StyledContainer>
    );
  }
}
