import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { useParams } from "react-router";

const Home = (props) => {
  const { wordOrNumber, color1, color2 } = useParams();
  console.log(wordOrNumber, color1, color2);
  let jsx;
  if (wordOrNumber) {
    if (wordOrNumber === "home") {
      jsx = <h1>Welcome</h1>;
    } else if (isNaN(wordOrNumber)) {
      color1 && color2
        ? (jsx = (
            <h1
              style={{
                color: `${color1}`,
                backgroundColor: `${color2}`,
                padding: "0.5rem",
              }}
            >
              The word is: {wordOrNumber}
            </h1>
          ))
        : (jsx = <h1>The word is: {wordOrNumber}</h1>);
    } else {
      jsx = <h1>The number is: {wordOrNumber}</h1>;
    }
  }
  return <div style={{ textAlign: "center" }}>{jsx}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/home">Home</Link>
        &nbsp;|&nbsp;
        <Link to="/4">number</Link>
        &nbsp;|&nbsp;
        <Link to="/noon">word</Link>
        &nbsp;|&nbsp;
        <Link to="/pug/saddleBrown/tan">word and color</Link>
      </p>
      <Switch>
        <Route path="/:wordOrNumber/:color1/:color2">
          <Home />
        </Route>
        <Route path="/:wordOrNumber">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
