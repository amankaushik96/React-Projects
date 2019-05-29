import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "Programming",
          "Gaming",
          "Product Launch",
          "Comedy Vines",
          "Art and Craft"
        ],
        datasets: [
          {
            label: "Number of Video Streamers",
            data: [14, 25, 59, 78, 11],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)"
            ],
            borderWidth: 1
          }
        ]
      }
    };
  }

  render() {
    return (
      <div
        style={{
          position: "relative",
          height: 450,
          width: 600,
          margin: "auto"
        }}
      >
        <Line
          options={{
            responsive: true
          }}
          data={this.state.data}
        />
      </div>
    );
  }
}
