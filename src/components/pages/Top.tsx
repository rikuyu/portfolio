import React from "react";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as HOME } from "../../assets/svg-images/home.svg";
import { ReactComponent as INFO } from "../../assets/svg-images/about.svg";

const styles = {
  img: {
    width: "100px",
    height: "100px",
  },
  pageTitle: {
    marginTop: "90px",
    color: "#6c63ff",
    borderBottom: "double 3px #6c63ff",
    fontSize: "30px",
    display: "inline-block",
  },
};

function Top() {
  return (
    <div>
      <span>Yuki's Portfolio</span>
      <Grid container justify="center" spacing={0}>
        <Grid item xs={12} sm={12} md={5}>
          <div style={styles.pageTitle}>
            <p>I'm Yuki.</p>
            <p>Welcome to My PortFolio</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <div>
            <HOME />
          </div>
        </Grid>
      </Grid>

      <Grid container justify="center" spacing={0}>
        <Grid item xs={12} sm={12} md={5}>
          <div>
            <INFO />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <div style={styles.pageTitle}>
            <p>I'm Yuki.</p>
            <p>Welcome to My PortFolio</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Top;
