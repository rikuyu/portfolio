import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import DnsIcon from "@material-ui/icons/Dns";
import Footer from "../components/Footer";
import AndroidIcon from "@material-ui/icons/Android";
import { Event } from "../Types";
import "../assets/styles/history.scss";

const eventLists: Event[] = [
  {
    id: 0,
    date: "2019-04",
    title: "大学入学",
    eventDesc:
      "情報系の学科に進学し、コンピュータサイエンスを学習し始めました.",
    isShowIcon: true,
    icon: <SchoolIcon />,
    iconColor: "#fff",
  },
  {
    id: 1,
    date: "2019-05",
    title: "Java 学習開始",
    eventDesc:
      "大学の講義にてJavaの学習を始めました.Javaが最初に学ぶプログラミング言語となります.",
    isShowIcon: false,
  },
  {
    id: 2,
    date: "2019-07",
    title: "HTML・CSSと出会う",
    eventDesc:
      "HTML・CSSと出会い学習を開始しました.CSSにとても苦手意識があります.",
    isShowIcon: false,
  },
  {
    id: 4,
    date: "2020-03",
    title: "JavaScriptの学習開始",
    eventDesc:
      "フロント・サーバーサイドの両方の開発が可能であることに価値を感じ、JSを学び始める",
    isShowIcon: false,
  },
  {
    id: 5,
    date: "2020-08",
    title: "Reactの学習開始・Blogの開始",
    eventDesc:
      "日本国内外の需要を踏まえ、Reactの学習を始める.同時期にブログを始める.",
    isShowIcon: false,
  },
  {
    id: 6,
    date: "2020-09",
    title: "Node・Expressの学習開始",
    eventDesc: "WebAPIに興味がわき、勉強を開始する.",
    isShowIcon: false,
  },
  {
    id: 7,
    date: "2021-02",
    title: "Androidアプリ開発の学習開始",
    eventDesc: "モバイル開発に興味がわき、始めました.",
    isShowIcon: true,
    icon: <AndroidIcon />,
    iconColor: "#32de84",
  },
  {
    id: 8,
    date: "2021-0802 ～ 2021-0806",
    title: "就業型サマーインターン",
    eventDesc:
      "モバイル開発コースに参加し、Office新着通知アプリの機能改善に取り組みました.",
    isShowIcon: true,
    icon: <AndroidIcon />,
    iconColor: "#32de84",
  },
];

const History = () => {
  return (
    <div className="history">
      <div>
        <p className="titleHistory">History</p>
      </div>
      <VerticalTimeline className="timeline">
        {eventLists.map((value) => {
          return (
            <VerticalTimelineElement
              key={value.id}
              className="vertical-timeline-element--work vertical-timeline-element-date"
              contentStyle={{ background: "#fff", color: "#3a3a3f" }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={value.date}
              iconStyle={{
                background: "#3a3a3f",
                color: value.isShowIcon ? value.iconColor : "fff",
              }}
              icon={value.isShowIcon ? value.icon : ""}
            >
              <h3 className="vertical-timeline-element-title">{value.title}</h3>
              <p>{value.eventDesc}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

      <p className="titleHistory">Future</p>
      <p className="titleFuture">～これからしたいこと～</p>
      <div className="futureList">
        <div className="futureItem">
          <AndroidIcon className="futureIcon" />
          <p>ハッカソン形式のイベントに参加したい.</p>
        </div>
        <div className="futureItem">
          <AndroidIcon className="futureIcon" />
          <p>Jetpack Composeの学習をしたい.</p>
        </div>
        <div className="futureItem">
          <DnsIcon className="futureIcon" />
          <p>サーバーサイドをKotlinで書いてみたい.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default History;
