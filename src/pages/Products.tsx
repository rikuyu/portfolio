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
import PokemonImg from "../assets/images/pokemon-port.png";
import PortfolioImg from "../assets/images/port.png";
import WeatherImg from "../assets/images/weather.png";
import TwitchImg from "../assets/images/twitch.png";
import TimerImg from "../assets/images/timer.png";
import PubgImg from "../assets/images/pubg-port.png";

export const productItems: ProductItem[] = [
  {
    id: 0,
    title: "Portfolio",
    desc: "自己紹介ページが欲しいと思って作成しました.",
    img: PortfolioImg,
  },
  {
    id: 1,
    title: "Blog",
    desc: "Hexo を用いて作成しました.日々の学習のアウトプットを行っています.",
    img: BlogImg,
  },
  {
    id: 3,
    title: "Timer アプリ",
    desc: "初めてGoogle Play にリリースしたアプリです.",
    img: TimerImg,
  },
  {
    id: 4,
    title: "PUBG Mobile クイズアプリ",
    desc: "自分の好きなゲームのクイズアプリを作成しました.",
    img: PubgImg,
  },
  {
    id: 5,
    title: "天気情報取得アプリ",
    desc: "世界各地の天気情報が見れるアプリです.",
    img: WeatherImg,
  },
  {
    id: 6,
    title: "Pokemon図鑑",
    desc: "HTTP通信を行う方法を学ぶために作りました.",
    img: PokemonImg,
  },
  {
    id: 7,
    title: "ゲーム動画探索アプリ",
    desc:
      "Twitch API で人気ゲームのストリーム動画が探せるアプリを作成しました.",
    img: TwitchImg,
  },
];

const Products = () => {
  return (
    <div className="body">
      <div className="product">
        <div className="container">
          <div className="pageProduct">
            <p>My Products</p>
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
                        style={{ height: 200, paddingTop: "0" }}
                        title={value.title + "img"}
                      />
                      <CardContent className="content">
                        <Typography
                          gutterBottom
                          component="h2"
                          className="cardTitle"
                        >
                          {value.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          className="desc"
                        >
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
        <div className="bottomMsg">
          <p>その他の作品はGithubで</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
