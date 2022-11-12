import React from 'react';
import './App.css'
// import Header
import Header from './Components/Header'
import MedicationContainer from './Components/MedicationContainer'; 
import Footer from './Components/Footer'
const App =() => {

 
  return (
    <div className="App">
      App Container
      <>
      <Header/>
      <MedicationContainer/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
