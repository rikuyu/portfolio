import React from "react";
import "../assets/styles/footer.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";

function Footer() {
  return (
    <div className="footer">
      <p className="footItem">© 2021 Yuki</p>
      <GitHubIcon
        className="icon footItem first"
        onClick={() => window.open("https://github.com/rikuyu", "_blank")}
      />
      <TwitterIcon
        className="icon footItem"
        onClick={() => window.open("https://twitter.com/yuuukiuu", "_blank")}
      />
      <LibraryBooksOutlinedIcon
        className="icon footItem"
        onClick={() => window.open("https://www.yuuuki-blog.com/", "_blank")}
      />
    </div>
  );
}

export default Footer;
