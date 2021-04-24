import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Footer from "../components/Footer";
import Modal from "react-modal";
import { MyInfo } from "../Types";
import "../assets/styles/about.scss";

const createData = (name: string, context: string) => {
  return { name, context };
};

const rows = [
  createData("名前", "小林 勇貴"),
  createData("所属", "同志社大学 情報システムデザイン学科 3年"),
  createData("趣味", "ゲーム、読書"),
];

const myInfo: MyInfo[] = [
  {
    id: 1,
    question: "Q.　なんでプログラミング始めたの？勉強してるの？",
    answer: "A.　大学で情報系に入ったから.　将来性があるから.　楽しいから.",
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
      "A.　ゲームやってるか、本読んでるか、Youtube見てる。コロナ収まったらいろんな場所に行きたい．",
  },
  {
    id: 4,
    question: "Q.　四回生では、どんな研究室に入るつもり？",
    answer:
      "A.　クラウドコンピューティングか自然言語処理の研究室に入りたい（なお、成績 、、、）",
  },
];

const About: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

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
          {myInfo.map((info) => {
            return (
              <div className="myInfo" key={info.id}>
                <div className="question">
                  <p>{info.question}</p>
                </div>
                <div className="answer">
                  <p>
                    {info.answer}
                    {info.id === 2 ? (
                      <span>
                        <Button
                          variant="contained"
                          className="openButton"
                          onClick={openModal}
                        >
                          技術力？
                        </Button>
                        <Modal
                          isOpen={isOpenModal}
                          onRequestClose={closeModal}
                          contentLabel="Example Modal"
                          className="modal"
                        >
                          <div className="winTitle">
                            <p>技術力とは？</p>
                          </div>
                          <div className="winContext">
                            <p>
                              ・その技術に対して深い知識を持ち、ソースコードを読み、理解できる力
                            </p>
                            <p>
                              ・その技術を使って実際にコードを書く力（＝開発力）
                            </p>
                            <p>だと私は考えています.</p>
                          </div>
                          <Button
                            variant="contained"
                            className="closeButton"
                            onClick={closeModal}
                          >
                            close
                          </Button>
                        </Modal>
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
