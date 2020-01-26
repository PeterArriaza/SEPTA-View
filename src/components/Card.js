import React from "react";
import Async from "react-async";
import "../styles/Card.css";

// .then(data => {
//   console.log(data);
//   this.setState({ stopData: data });
// })
// .catch(err => console.log(err));

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  getStopData = async () =>
    await fetch(this.props.url)
      .then(res => (res.ok ? res : Promise.reject(res)))
      .then(res => res.json());

  render() {
    return (
      <div>
        <Async promiseFn={this.getStopData}>
          {({ data, err, isLoading }) => {
            if (isLoading) return "Loading...";
            if (err) return `Something went wrong: ${err.message}`;
            if (data) {
              const train0 = data[0];
              const train1 = data[1];
              const train2 = data[2];
              return (
                <div className="card">
                  <p className="cardTitle">{this.props.nickname}</p>
                  {/* <p>{train0.orig_line}</p> */}
                  <table>
                    <thead>
                      <tr>
                        <th>Arrive:</th>
                        <th>Delay:</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{train0.orig_departure_time}</td>
                        <td>{train0.orig_delay}</td>
                      </tr>
                      <tr>
                        <td>{train1.orig_departure_time}</td>
                        <td>{train1.orig_delay}</td>
                      </tr>
                      <tr>
                        <td>{train2.orig_departure_time}</td>
                        <td>{train2.orig_delay}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
          }}
        </Async>
      </div>
    );
  }
}

// return (
// <div className="card">
//   <p className="cardTitle">{this.props.nickname}</p>
//   <p>{this.props.orig_line}</p>
//     <p>
//       <span className="underlineText">Arrive:</span>
//       {this.props.orig_departure_time}
//     </p>
//     <p>
//       <span className="underlineText">Status:</span>
//       {this.props.orig_delay}
//     </p>
//     <p>
//       <span className="underlineText">Time to Departure:</span>
//       {this.props.timeToDeparture}
//     </p>
//   </div>
// );}
