import React, { useState } from "react"; 
import "./App.css";

import Text from "./components/Text";
import Alert from "./components/Alert";



function App()
  {
  
  const [alert, setalert] = useState ('null')
  
  const showAlert =(message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert('null')
    }, 1500);
  }
  return (
    <  >
      
      <Alert alert={alert} />
      <div className="container">
      <Text title = "convert the text" value = "Paste your Text"  alert = {showAlert}/>
      </div>
    
    </>
  );
}

export default App;
