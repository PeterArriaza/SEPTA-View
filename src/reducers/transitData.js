const initialState = {
  1: {
    line: "Lansdale/Doylestown to Center City",
    start: "Fort Washington",
    end: "Suburban",
    depart: "5:01 PM",
    arrive: "5:46 PM",
    status: "3 min late",
    timeToDepart: "14 min",
    nickname: "Back Home"
  },
  2: {
    line: "Lansdale/Doylestown to Doylestown",
    start: "Suburban",
    end: "Fort Washington",
    depart: "6:30 AM",
    arrive: "7:07 AM",
    status: "2 min late",
    timeToDepart: "10 min",
    nickname: "To Work"
  },
  3: {
    line: "Newark to Newark",
    start: "Suburban",
    end: "Newark",
    depart: "7:14 PM",
    arrive: "8:15 PM",
    status: "0 min late",
    timeToDepart: "1 hour",
    nickname: "To Mom's"
  }
};

export default (state = initialState) => {
  return state;
};
