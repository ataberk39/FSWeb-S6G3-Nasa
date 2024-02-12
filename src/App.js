import React, { useEffect } from "react";
import "./App.css";
import { useState} from "react";
import ApondComponent from "./ApondComponent"
import myObj from"./Api"
import TextInput from "./SearchHeader";


function App() {
  const [apodData, setApodData] = useState([])



  const fetchData = async (term) => {
    try {
      let myData = await myObj.fetchApi(term);
      setApodData(myData);
    } catch (error) {
      console.error("Error in useEffect:", error);
    }
  };

  // useEffect(() => {
  //   const fetchData = async (term) => {
  //     try {
  //       let myData = await myObj.fetchApi(term);
  //       setApodData(myData);
  //     } catch (error) {
  //       console.error("Error in useEffect:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  
  return (
    <div className="App">
      <TextInput input={fetchData}/>
      {apodData.map((apodData,index)=>{
        return <ApondComponent apodData={apodData} key={index}/>
      })}
      
    </div>
  );
}

export default App;
