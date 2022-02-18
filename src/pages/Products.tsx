import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
import CardMedia from "@material-ui/core/CardMedia";
import { ProductItem } from "../Types";
import "../assets/styles/work.scss";
import BlogImg from "../assets/images/blog.png";
import PortfolioImg from "../assets/images/port.png";
import WeatherImg from "../assets/images/weather.png";
import TwitchImg from "../assets/images/twitch-game.png";
import ContactImg from "../assets/images/contact-lens.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";

export const productItems: ProductItem[] = [
  {
    id: 0,
    title: "コンタクト交換リマインダー",
    desc: "Jetpack Compose で作成しました.",
    img: ContactImg,
    techs: ["devicon-kotlin-plain colored", "devicon-android-plain colored"],
    link: "https://github.com/rikuyu/contact-lens-reminder",
  },
  {
    id: 1,
    title: "Portfolio",
    desc: "自己紹介ページが欲しいと思って作成しました.",
    img: PortfolioImg,
    techs: [
      "devicon-react-original colored",
      "devicon-materialui-plain colored",
      "devicon-sass-original colored",
    ],
    link: "https://github.com/rikuyu/Portfolio",
  },
  {
    id: 2,
    title: "ゲーム動画を探せるアプリ",
    desc:
      "Twitch API で人気ゲームのストリーム動画が探せるアプリを作成しました.",
    img: TwitchImg,
    techs: ["devicon-kotlin-plain colored", "devicon-android-plain colored"],
    link: "https://github.com/rikuyu/TwitchApp",
  },
  {
    id: 3,
    title: "Blog",
    desc: "Hexo を用いて作成しました.日々の学習のアウトプットを行っています.",
    img: BlogImg,
    techs: ["devicon-javascript-plain colored"],
    link: "https://www.yuuuki-blog.com/",
  },
  {
    id: 4,
    title: "天気情報取得アプリ",
    desc: "世界各地の天気情報が見れるアプリです.",
    img: WeatherImg,
    techs: [
      "devicon-react-original colored",
      "devicon-redux-original",
      "devicon-typescript-plain colored",
    ],
    link: "https://github.com/rikuyu/Weather-App",
  },
];

const Products = () => {
  return (
    <div className="body">
      <div className="product">
        <div className="container">
          <div className="pageProduct">
            <p>Products</p>
          </div>
          <Grid container justify="center" spacing={4}>
            {productItems.map((value) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={value.id}>
                  <Card className="card">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={value.img}
                        style={{ height: 180, paddingTop: "0" }}
                        title={value.title + "img"}
                      />
                      <CardContent className="content">
                        <div className="productTitle">
                          <Typography
                            gutterBottom
                            component="h2"
                            className="cardTitle"
                          >
                            {value.title}
                          </Typography>
                          {value.id !== 3 ? (
                            <GitHubIcon
                              className="linkIcon"
                              onClick={() => window.open(value.link, "_blank")}
                            />
                          ) : (
                            <DesktopMacIcon
                              className="linkIcon blogIcon"
                              onClick={() => window.open(value.link, "_blank")}
                            />
                          )}
                        </div>
                        <Typography
                          variant="body2"
                          component="p"
                          className="desc"
                        >
                          {value.desc}
                        </Typography>
                        <span className="techs">
                          {value.techs.map((t) => {
                            return <span className={t + " skillIcon"}></span>;
                          })}
                        </span>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
        <div className="bottomMsg">
          <p>その他の作品はGithubで</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
