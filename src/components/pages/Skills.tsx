import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Footer from "../Footer";
import "../../assets/styles/skills.scss";

type CardItem = {
  id: number;
  title: string;
  desc: string;
  rate: number;
  icon: string;
};

const cardItemLists: CardItem[] = [
  {
    id: 0,
    title: "React",
    desc: "世界的に流行しているフレームワークなので勉強をしています。",
    rate: 3,
    icon: "devicon-react-original colored",
  },
  {
    id: 1,
    title: "Redux",
    desc: "大規模開発を考え、状態管理を学びたいと思って勉強し始めました。",
    rate: 1,
    icon: "devicon-redux-original colored",
  },
  {
    id: 2,
    title: "Node.js",
    desc: "サーバーサイドを学びたいと思って勉強を始めました。",
    rate: 2,
    icon: "devicon-nodejs-plain colored",
  },
  {
    id: 3,
    title: "Express",
    desc: "Node.jsをより簡易的に書けると知り、勉強を始めました。",
    rate: 2,
    icon: "devicon-express-original colored",
  },
  {
    id: 4,
    title: "MySQL",
    desc: "DBの知識を学びたいと思って勉強し始めました。",
    rate: 2,
    icon: "devicon-mysql-plain colored",
  },
  {
    id: 5,
    title: "Java",
    desc: "Javaで木構造や整列、スタックなどのアルゴリズムを学びました。",
    rate: 3,
    icon: "devicon-java-plain colored",
  },
];

function Skills() {
  return (
    <div>
      <div className="pageSkill">
        <p>My Skill</p>
      </div>
      <Grid container justify="center" spacing={4}>
        {cardItemLists.map((value) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={value.id}>
              <Card className="card">
                <CardActionArea>
                  <CardContent>
                    <p className={value.icon}></p>
                    {/* <div className="icon">
                      <p className={value.icon}></p>
                    </div> */}
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className="cardTitle"
                    >
                      {value.title}
                    </Typography>
                    <Rating name="read-only" value={value.rate} readOnly />
                    <Typography variant="body2" component="p" className="desc">
                      {value.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
}

export default Skills;
