export type CardItem = {
  id: number;
  title: string;
  desc: string;
  rate: number;
  icon: string;
};

export type ProductItem = {
  id: number;
  title: string;
  desc: string;
  img: string;
  techs: string[];
  link: string;
};

export type Event = {
  id: number;
  date: string;
  title: string;
  eventDesc: string;
  isShowIcon: boolean;
  icon?: any;
  iconColor?: string;
};

export type NavbarItem = {
  id: number;
  route: string;
  label: string;
};

export type MyInfo = {
  id: number;
  question: string;
  answer: string;
};
