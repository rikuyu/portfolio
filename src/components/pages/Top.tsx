import React from "react";
import "../../assets/styles/top.scss";
import { ReactComponent as HOME } from "../../assets/svg-images/home.svg";

// const styles = {
//   img: {
//     width: "410px",
//     height: "170px",
//   },
//   pageTitle: {
//     marginTop: "90px",
//     color: "#161616",
//     borderBottom: "double 3px #161616",
//     fontSize: "30px",
//     display: "inline-block",
//   },
// };

function Top() {
  return (
    <div>
      <div className="blank"></div>
      <div className="flexbox">
        <section className="greet-msg">
          <p>Welcome to Yuki's PortFolio</p>
        </section>
        <section className="home">
          <HOME className="home-img" />
        </section>
      </div>
    </div>
  );
}

export default Top;
