import React, { useState } from "react";

const App = () => {
  const state = useState();
  let newTime = new Date().toLocaleTimeString();
  let [CTime,setCTime] = useState(newTime);
  // let count = 0;
  let UpdateTime = () => {
    let newCTime = new Date().toLocaleTimeString();
    setCTime(newCTime);
    // console.log("clicked " + count++);
  };
  setInterval(UpdateTime,1000);

  return (
    <>  
      <h1 className="number">{CTime}</h1>
      {/* <button className="button" onClick={UpdateTime}>get time</button> */}
    </>
  );
};

export default App;
