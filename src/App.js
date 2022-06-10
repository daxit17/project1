import logo from "./logo.svg";
import "./App.css";
import Country from "./container/Country";
import CountryFun from "./container/CountryFun";
import City from "./container/City";
import CityFun from "./container/CityFun";
import { useState } from "react";
import Practice from "./container/Practice";
import Loading from "./container/Loading";
import Home from "./container/Home";
import { useEffect} from 'react';
import Time from "./container/Time";
import Timefun from "./container/Timefun";
import Counter from "./Counter";

function App(props) {

  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
