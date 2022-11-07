import {useState} from 'react'
import './index.css';
// import Header
import Header from './Components/Header'
import MedicationContainer from './Components/MedicationContainer'; 
import AddMedications from './Components/AddMedications'
const App =() => {
 
  const [addMedications, setAddMedications] = useState(false)
  console.log(addMedications)
  return (
    <div className="App">
      App Container
      <Header/>
      {/* Add Medication Components / model function*/}
      <div className='openAddMedicarion' onClick = {() => {
        setAddMedications(true)
      }}>
        Add Medication Icon (+)
      </div>
      {AddMedications && <AddMedications openAddMedication = {setAddMedications}/>}
      <MedicationContainer />

    </div>
  );
}

export default App;
