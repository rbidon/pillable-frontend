import {useState} from 'react'
import './index.css';
// import Header
import Header from './Components/Header'
import MedicationContainer from './Components/MedicationContainer'; 
import AddMedications from './Components/AddMedications'
const App =() => {
//  open the modal
  const [openAddMedication, setOpenAddMedication] = useState(false)
  console.log(openAddMedication)
 
  return (
    <div className="App">
      App Container
      <Header/>
      {/* Add Medication Components / model function*/}
      <div className='openAddMedication' onClick = {() => {
        openAddMedication(true)
      }}>
        Add Medication Icon (+)
      </div>
      {AddMedications && <AddMedications openAddMedication = {setOpenAddMedication}/>}
      <MedicationContainer/>

    </div>
  );
}

export default App;
