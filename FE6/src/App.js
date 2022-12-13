import React from "react"; 
import "./css/style.css";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from "./Home";
import Detail from "./Detail";


function App() {
  return (  
    <React.Fragment>
       <Router>
    <Routes>
      <Route path ='/' element ={<Home/>}/>
      <Route path='/detail' element={<Detail />} />
    </Routes>
    </Router>
    </React.Fragment>
  );
}


export default App;
