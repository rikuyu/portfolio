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
    desc: "最近はReactに加えてNext.jsなんかも学びたいと思っています。",
    rate: 3,
    icon: "devicon-react-original colored",
  },
  {
    id: 1,
    title: "Redux",
    desc:
      "大規模開発を考え、状態管理について学びたいと思って勉強し始めました。",
    rate: 1,
    icon: "devicon-redux-original colored",
  },
  {
    id: 2,
    title: "Node.js",
    desc: "サーバーサイドを学びたいと思って勉強を始めました。",
    rate: 1,
    icon: "devicon-nodejs-plain colored padd",
  },
  {
    id: 3,
    title: "Express",
    desc: "Node.jsをより簡易的に書けると知り、勉強を始めました。",
    rate: 2,
    icon: "devicon-express-original",
  },
  {
    id: 4,
    title: "MySQL",
    desc:
      "DBについて学びたいと思って勉強し始めました。MySQLという名の由来面白いですよね。",
    rate: 2,
    icon: "devicon-mysql-plain",
  },
  {
    id: 5,
    title: "Java",
    desc:
      "大学で学んだ言語です。この言語で木構造や整列、スタックなどのアルゴリズムを学びました。",
    rate: 3,
    icon: "devicon-java-plain colored padd",
  },
  {
    id: 6,
    title: "TypeScript",
    desc:
      "中・大規模開発に向けて静的型付けを学んでいます。学習コストが高いと感じています。",
    rate: 1,
    icon: "devicon-typescript-plain colored",
  },
];

function Skills() {
  return (
    <div className="body">
      <div className="skill">
        <div className="container">
          <div className="pageSkill">
            <p>My Skills</p>
          </div>
          <Grid container justify="center" spacing={4}>
            {cardItemLists.map((value) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={value.id}>
                  <Card className="card">
                    <CardActionArea>
                      <CardContent className="content">
                        <p className={value.icon + " skillIcon"}></p>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          className="cardTitle"
                        >
                          {value.title}
                        </Typography>
                        <Rating name="read-only" value={value.rate} readOnly />
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
      </div>
      <Footer />
    </div>
  );
}

export default Skills;
