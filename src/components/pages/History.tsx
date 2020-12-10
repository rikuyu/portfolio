import React from "react";
import { Event } from "../../Type";
import { ReactComponent as HISTORY } from "../../assets/svg-images/history.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import "../../assets/styles/history.scss";

const eventLists: Event[] = [
  {
    id: 0,
    date: "2019-04",
    title: "大学入学",
    eventDesc:
      "情報系の学科に進学し、コンピュータサイエンスを学習し始めました。",
  },
  {
    id: 1,
    date: "2019-05",
    title: "Java 学習開始",
    eventDesc:
      "大学の講義にてJavaの学習を始めました。Javaが最初に学ぶプログラミング言語となります。",
  },
  {
    id: 2,
    date: "2019-07",
    title: "HTML・CSSと出会う",
    eventDesc:
      "HTML・CSSと出会い学習を開始しました。CSSにとても苦手意識があります。",
  },
  {
    id: 3,
    date: "2020-01",
    title: "Ruby・Ruby on Rails の学習開始",
    eventDesc:
      "掲示板などを制作しましたが、今後の技術の需要を考え、学習を中断する。",
  },
  {
    id: 5,
    date: "2020-03",
    title: "JavaScriptの学習開始",
    eventDesc:
      "フロント・サーバーサイドの両方の開発が可能であることに価値を感じ、JSを学び始める",
  },
  {
    id: 6,
    date: "2020-08",
    title: "Reactの学習開始・Blogの開始",
    eventDesc:
      "日本国内外の需要を踏まえ、Reactの学習を始める。同時期にブログを始める。",
  },
  {
    id: 7,
    date: "2020-09",
    title: "Node・Expressの学習開始",
    eventDesc: "WebAPIに興味がわき、勉強を開始する。",
  },
];

function History() {
  return (
    <div className="history">
      <div>
        <h2 className="title">History</h2>
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
              iconStyle={{ background: "#3a3a3f", color: "#3a3a3f" }}
            >
              <h3 className="vertical-timeline-element-title">{value.title}</h3>
              <p>{value.eventDesc}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default History;
