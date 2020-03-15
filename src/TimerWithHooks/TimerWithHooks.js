import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { StyledContainer } from "../MovieSearchWithClass/MovieSearchWithClass";
import { log } from "../App";

const Container = styled(StyledContainer)`
  background-color: rgb(193, 180, 247);
`;

export const TimerWithHooks = () => {
  const [timer, setTimer] = useState(0);
  const [clockStart, setClockStart] = useState(false);

  function startClock() {
    setClockStart(true);
  }

  function stopClock() {
    setClockStart(false);
  }

  function reset() {
    setTimer(0);
    setClockStart(false);
  }

  useEffect(() => {
    log("effect");
    let timerID;
    if (clockStart) {
      log("startClock");
      timerID = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    } else if (!clockStart) {
      log("stopClock");
      clearInterval(timerID);
    }
    return () => {
      log("cleanup");
      clearInterval(timerID);
    };
  }, [clockStart, timer]);

  return (
    <Container>
      {log("render-Hook")}
      <p>Hooks</p>
      <p>{timer} s</p>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={startClock}
      >
        start
      </Button>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={stopClock}
      >
        stop
      </Button>
      <Button variant="contained" size="small" onClick={reset}>
        reset
      </Button>
    </Container>
  );
};
