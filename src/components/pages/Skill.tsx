import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Footer from "../Footer";
import { CardItem } from "../../Types";
import "../../assets/styles/skill.scss";

export const skillItems: CardItem[] = [
  {
    id: 0,
    title: "Kotlin",
    desc: "Android開発で使用しています.",
    rate: 3,
    icon: "devicon-kotlin-plain kotlin-color",
  },
  {
    id: 1,
    title: "Android",
    desc: "Androidエンジニアになりたい.",
    rate: 3,
    icon: "devicon-android-plain colored",
  },
  {
    id: 2,
    title: "React",
    desc: "最近はReactに加えてNext.jsなんかも学びたいと思っています.",
    rate: 3,
    icon: "devicon-react-original colored",
  },
  {
    id: 3,
    title: "Redux",
    desc: "大規模開発を考え、状態管理について学びたいと思って勉強を始めました.",
    rate: 1,
    icon: "devicon-redux-original redux-color",
  },
  {
    id: 4,
    title: "Node.js",
    desc: "サーバーサイドを学びたいと思って勉強を始めました.",
    rate: 2,
    icon: "devicon-nodejs-plain colored padd",
  },
  {
    id: 5,
    title: "Express",
    desc: "Node.jsをより簡易的に書けると知り、勉強を始めました.",
    rate: 2,
    icon: "devicon-express-original",
  },
  {
    id: 6,
    title: "MySQL",
    desc:
      "DBについて学びたいと思って勉強を始めました.MySQLという名前の由来面白いですよね.",
    rate: 2,
    icon: "devicon-mysql-plain",
  },
  {
    id: 7,
    title: "Firebase",
    desc:
      "Android開発にて、Cloud Firestore, Auth、Cloud Storage を使用しました。",
    rate: 2,
    icon: "devicon-firebase-plain colored",
  },
  {
    id: 8,
    title: "Java",
    desc:
      "大学で学んだ言語です.この言語で木構造や整列、スタックなどのアルゴリズムを学びました.",
    rate: 3,
    icon: "devicon-java-plain colored padd",
  },
  {
    id: 9,
    title: "TypeScript",
    desc:
      "中・大規模開発に向けて静的型付けを学んでいます.学習コストが高いと感じています.",
    rate: 1,
    icon: "devicon-typescript-plain ts-color",
  },
  {
    id: 10,
    title: "Github",
    desc:
      "基本的な使い方は学習済みですが、実際にチーム開発で使用したことはありません.",
    rate: 2,
    icon: "devicon-github-original",
  },
  {
    id: 11,
    title: "C",
    desc: "学校の講義で学習しました.",
    rate: 2,
    icon: "devicon-c-plain c-color",
  },
  {
    id: 12,
    title: "C++",
    desc: "学校の講義で学習しました.",
    rate: 2,
    icon: "devicon-cplusplus-plain cplus-color",
  },
  {
    id: 13,
    title: "Ruby",
    desc: "Railsを使うために勉強を開始しました.",
    rate: 1,
    icon: "devicon-ruby-plain ruby-color",
  },
  {
    id: 14,
    title: "Ruby on Rails",
    desc: "バックエンドの知識を深めるために勉強を開始しました.",
    rate: 2,
    icon: "devicon-rails-plain-wordmark rails-color",
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
