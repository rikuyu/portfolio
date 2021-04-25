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
};

export type Event = {
  id: number;
  date: string;
  title: string;
  eventDesc: string;
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
