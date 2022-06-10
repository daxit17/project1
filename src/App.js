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

const HomeWithLoading = Loading(Home)

function App(props) {

  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  let orgData = [
    { id: 101, name: "Daxit" },
    { id: 102, name: "Hitesh" }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setData(orgData) }, 2000);
  }, [])

  return (
    <div>
      <HomeWithLoading
        isLoading={Loading}
        data={data} 
        />
        <h2 style={{color:'blue'}}> Class based component to implement Timer with lifecycle methods :</h2>
      <Time/>
        <h2 style={{color:'blue'}}> Function based component to implement Timer with lifecycle methods :</h2>
      <Timefun />
    </div>
  );
}

export default App;
