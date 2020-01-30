import { CREATE_NEW_CARD } from "../actions";

// const initialState = [
//   {
//     id: "0",
//     orig_line: "Lansdale/Doylestown to Center City",
//     start: "Fort Washington",
//     end: "Suburban",
//     orig_departure_time: "5:01 PM",
//     orig_arrival_time: "5:46 PM",
//     orig_delay: "3 min late",
//     timeToDeparture: "14 min",
//     nickname: "Back Home"
//   },
//   {
//     id: "1",
//     orig_line: "Lansdale/Doylestown to Doylestown",
//     start: "Suburban",
//     end: "Fort Washington",
//     orig_departure_time: "6:30 AM",
//     orig_arrival_time: "7:07 AM",
//     orig_delay: "2 min late",
//     timeToDeparture: "10 min",
//     nickname: "To Work"
//   },
//   {
//     id: "2",
//     orig_line: "Newark to Newark",
//     start: "Suburban",
//     end: "Newark",
//     orig_departure_time: "7:14 PM",
//     orig_arrival_time: "8:15 PM",
//     orig_delay: "0 min late",
//     timeToDeparture: "1 hour",
//     nickname: "To Mom's"
//   }
// ];

// const initialState = [
//   {
//     cardUrl:
//       "http://www3.septa.org/hackathon/NextToArrive/Airport%20Terminal%20B/Ardmore/3",
//     start: "Airport Terminal A",
//     end: "Ardmore",
//     nickname: "to Tired Hands We Go",
//     id: 1
//   }
// ];

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_CARD:
      // console.log(state);
      const { start, end, url, nickname } = action;
      const id = JSON.stringify(state.length);
      // console.log(`length is ${id} `);
      const newCard = { id, start, end, url, nickname };
      const newState = [...state];
      newState[id] = newCard;
      // console.log(newState);
      return newState;
  }
  // console.log(state);
  return state;
};
