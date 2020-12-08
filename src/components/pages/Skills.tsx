import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { CardItem } from "../../Type";
import Grid from "@material-ui/core/Grid";

import { ReactComponent as AWS } from "../../assets/svg-images/amazonwebservices-original-wordmark.svg";
import { ReactComponent as REACT } from "../../assets/svg-images/react-original-wordmark.svg";
import { ReactComponent as REDUX } from "../../assets/svg-images/redux-original.svg";
import { ReactComponent as EXPRESS } from "../../assets/svg-images/express-original.svg";
import { ReactComponent as JAVA } from "../../assets/svg-images/java-original-wordmark.svg";
import { ReactComponent as MYSQL } from "../../assets/svg-images/mysql-original-wordmark.svg";

// import { Theme } from "@material-ui/core/styles/createMuiTheme";
// import withStyles, {
//   WithStyles,
//   StyleRules,
// } from "@material-ui/core/styles/withStyles";
// import createStyles from "@material-ui/core/styles/createStyles";

const styles = {
  gridContainer: {
    // paddingRight: "30px",
    // paddingLeft: "30px",
  },
  pageTitle: {
    marginTop: "90px",
    color: "#6c63ff",
    borderBottom: "double 3px #6c63ff",
    fontSize: "30px",
    display: "inline-block",
  },
  card: {
    border: "solid 2px #6c63ff",
    boxShadow: "0 2px 10px rgba(0,0,0,.2)",
    margin: "30px",
  },
  media: {
    padding: "10px",
    height: 140,
  },
  title: {
    borderBottom: "solid 3px #6c63ff",
  },
};
const cardItemLists: CardItem[] = [
  {
    id: 0,
    title: "React",
    desc: "rrrrrr",
    icon: "REACT",
  },
  { id: 1, title: "Redux", desc: "dududdu", icon: "REDUX" },
  { id: 2, title: "Express", desc: "xexeexe", icon: "EXPRESS" },
  { id: 3, title: "MySQL", desc: "sqssqlsqs", icon: "MYSQL" },
  { id: 4, title: "Java", desc: "javajavajaav", icon: "JAVA" },
  { id: 5, title: "AWS", desc: "awsawsaws", icon: "AWS" },
];

function Skills() {
  return (
    <div>
      <span style={styles.pageTitle}>My Skills</span>
      <Grid container justify="center" spacing={4} style={styles.gridContainer}>
        {cardItemLists.map((value) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={value.id}>
              <Card style={styles.card}>
                <CardActionArea>
                  <CardMedia style={styles.media} component="img" src={JAVA} />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={styles.title}
                    >
                      {value.title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {value.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Skills;
