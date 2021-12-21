import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Footer from "../components/Footer";
import AndroidIcon from "@material-ui/icons/Android";
import { Event } from "../Types";
import "../assets/styles/history.scss";

const eventLists: Event[] = [
  {
    id: 1,
    date: "2021-8/2 ～ 2021-8/6",
    title: "サイボウズ インターン",
    eventDesc:
      "モバイル開発コースに参加し、Office新着通知アプリの機能改善に取り組む.",
    isShowIcon: true,
    icon: <AndroidIcon />,
    iconColor: "#32de84",
  },
  {
    id: 2,
    date: "2021-8/17 ～ 2021-8/27",
    title: "チームラボ インターン",
    eventDesc: "2週間地方銀行のアプリ開発に携わりました.",
    isShowIcon: true,
    icon: <AndroidIcon />,
    iconColor: "#32de84",
  },
  {
    id: 3,
    date: "2021-10/01 ～ 2021-12/31",
    title: "ドワンゴ インターン",
    eventDesc: "3ヵ月ニコニコ動画の開発に携わりました.",
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
      <Footer />
    </div>
  );
};

export default History;
