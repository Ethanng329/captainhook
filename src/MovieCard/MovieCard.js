import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    width: "25%",
    height: "25rem",
    margin: "0.5rem"
  },
  media: {
    flex: 7,
    height: "18rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "flex-end"
  },
  titleContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    marginTop: "1rem"
  }
};
const Movie = props => {
  const { classes } = props;
  const { Poster, Title, Year } = props.image;
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={`${Poster}`} title={Title} />
      <Typography className={classes.titleContainer} variant="subtitle1">
        {`${Title} (${Year})`}
      </Typography>
    </Card>
  );
};

export const MovieCard = withStyles(styles)(Movie);
