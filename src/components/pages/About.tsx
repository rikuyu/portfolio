import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Footer from "../Footer";
import "../../assets/styles/about.scss";

function createData(name: string, context: string) {
  return { name, context };
}

const rows = [
  createData("名前", "小林 勇貴"),
  createData("所属", "同志社大学 情報システムデザイン学科 二回"),
  createData("趣味", "ゲーム(PUBG Mobile)、読書"),
];

type Info = {
  id: number;
  question: string;
  answer: string;
};

const myInfo: Info[] = [
  {
    id: 1,
    question: "Q.　なんでプログラミング始めたの？勉強してるの？",
    answer:
      "A.　今後社会で役立つスキルだと思ったから。調査しながらコツコツ楽積み上げて作っていくことが楽しいから．",
  },
  {
    id: 2,
    question: "Q.　今後どうなりたい？",
    answer:
      "A.　技術力を持ち、かつ、開発物の利用者の目線から物事を見られるエンジニアになりたい．",
  },
  {
    id: 3,
    question: "Q.　プログラミング以外に何してる？",
    answer:
      "A.　ゲームやってるか、Youtube見てる。コロナ収まったらいろんな場所に行きたい．",
  },
  {
    id: 4,
    question: "Q.　四回生では、どんな研究室に入るつもり？",
    answer:
      "A.　クラウドコンピューティングか自然言語処理に入りたい（なお、成績 、、、）",
  },
];

export default function About() {
  return (
    <div className="about">
      <div className="pageAbout">
        <p>About me</p>
      </div>
      <div className="container">
        <TableContainer>
          <Table className="table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align="center" className="tableItem headline">
                    {row.name}
                  </TableCell>
                  <TableCell align="center" className="tableItem">
                    {row.context}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="queAndAns">
          {myInfo.map((val) => {
            return (
              <div className="myInfo" key={val.id}>
                <div className="question">
                  <p>{val.question}</p>
                </div>
                <div className="answer">
                  <p>{val.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
