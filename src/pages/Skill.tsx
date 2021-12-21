import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Footer from "../components/Footer";
import { CardItem } from "../Types";
import "../assets/styles/skill.scss";

export const skillItems: CardItem[] = [
  {
    id: 0,
    title: "Kotlin",
    desc: "Android開発で使用しています. Ktorをちょっと",
    rate: 3,
    icon: "devicon-kotlin-plain kotlin-color",
  },
  {
    id: 1,
    title: "Android",
    desc: "もっとも得意とする分野です.",
    rate: 3,
    icon: "devicon-android-plain colored",
  },
  {
    id: 2,
    title: "React",
    desc: "このポートフォリオはReact × TS × Material-UI で作られています.",
    rate: 3,
    icon: "devicon-react-original colored",
  },
  {
    id: 3,
    title: "MySQL",
    desc:
      "DBについて学びたいと思って勉強を始めました. MySQLという名前の由来面白いですよね.",
    rate: 2,
    icon: "devicon-mysql-plain",
  },
  {
    id: 4,
    title: "Firebase",
    desc: "Android開発で使用しています.",
    rate: 2,
    icon: "devicon-firebase-plain colored",
  },
  {
    id: 5,
    title: "Java",
    desc:
      "大学で学んだ言語です.この言語で木構造や整列、スタックなどのアルゴリズムを学びました.",
    rate: 3,
    icon: "devicon-java-plain colored padd",
  },
  {
    id: 4,
    title: "TypeScript",
    desc: "",
    rate: 1,
    icon: "devicon-typescript-plain ts-color",
  },
  {
    id: 5,
    title: "C",
    desc: "学校の講義で学習しました. 脳が受け付けないかまったく身に付いてない.",
    rate: 2,
    icon: "devicon-c-plain c-color",
  },
];

const Skills: React.FC = () => {
  return (
    <div className="body">
      <div className="skill">
        <div className="container">
          <div className="pageSkill">
            <p>My Skills</p>
          </div>
          <Grid container justify="center" spacing={4}>
            {skillItems.map((value) => {
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
};

export default Skills;
