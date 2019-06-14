import React from "react";
// import { Router, Route, Switch } from "react-router-dom";
// import StreamCreate from "./streams/StreamCreate";
// import StreamShow from "./streams/StreamShow";
// import StreamEdit from "./streams/StreamEdit";
// import StreamDelete from "./streams/StreamDelete";
// import StreamList from "./streams/StreamList";
// import Header from "./Header";
// import history from "../history";
// import Chart from "./Chart";

// const App = () => {
//   return (
//     <div className="ui container">
//       <Router history={history}>
//         <div>
//           <Header />
//           <Switch>
//             <Route path="/" exact component={StreamList} />
//             <Route path="/streams/new" exact component={StreamCreate} />
//             <Route path="/streams/edit/:id" exact component={StreamEdit} />
//             <Route path="/streams/delete/:id" exact component={StreamDelete} />
//             <Route path="/streams/:id" exact component={StreamShow} />
//           </Switch>
//         </div>
//       </Router>
//       <div style={{ position: "relative", top: "50px" }}>
//         <Chart />
//       </div>
//     </div>
//   );
// };

// export default App;
class App extends React.Component {
  state = { count: 0 };
  t;
  componentDidMount() {
    var count = 0;
    this.t = setInterval(() => {
      this.setState({ count: count++ });
    }, 1000);
  }

  setLi = count => {
    console.log(count);
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(
        <>
          <li>{i}</li>
        </>
      );
    }
    clearInterval();
    return arr;
  };

  render() {
    return <ul>{this.setLi(this.state.count)}</ul>;
  }
}

export default App;
