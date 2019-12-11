import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
// import firebase from "./firebase/firebase.utils";

const Hats = () => <h1>Hats</h1>;
const Sneakers = () => <h1>Sneakers</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={Hats} />
        <Route path="/sneakers" component={Sneakers} />
      </Switch>
    </div>
  );
}

export default App;
