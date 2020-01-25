import { CREATE_NEW_CARD } from "../actions";

const initialState = {
  1: {
    id: "1",
    line: "Lansdale/Doylestown to Center City",
    start: "Fort Washington",
    end: "Suburban",
    depart: "5:01 PM",
    arrive: "5:46 PM",
    status: "3 min late",
    timeToDeparture: "14 min",
    nickname: "Back Home"
  },
  2: {
    id: "2",
    line: "Lansdale/Doylestown to Doylestown",
    start: "Suburban",
    end: "Fort Washington",
    depart: "6:30 AM",
    arrive: "7:07 AM",
    status: "2 min late",
    timeToDeparture: "10 min",
    nickname: "To Work"
  },
  3: {
    id: "3",
    line: "Newark to Newark",
    start: "Suburban",
    end: "Newark",
    depart: "7:14 PM",
    arrive: "8:15 PM",
    status: "0 min late",
    timeToDeparture: "1 hour",
    nickname: "To Mom's"
  }
  // ,
  // 4: {
  //   id: "4",
  //   line: "Newark to Newark",
  //   start: "Suburban",
  //   end: "Newark",
  //   depart: "7:14 PM",
  //   arrive: "8:15 PM",
  //   status: "0 min late",
  //   timeToDeparture: "1 hour",
  //   nickname: "To Mom's"
  // },
  // 5: {
  //   id: "5",
  //   line: "Newark to Newark",
  //   start: "Suburban",
  //   end: "Newark",
  //   depart: "7:14 PM",
  //   arrive: "8:15 PM",
  //   status: "0 min late",
  //   timeToDeparture: "1 hour",
  //   nickname: "To Mom's"
  // }
};

export default (state = initialState) => {
  return state;
};
