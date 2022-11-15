import React, {useState} from 'react';
import './App.css'
import './Components/MedicationContainer.css'
// import Header
import Header from './Components/Header';
import MedicationContainer from './Components/MedicationContainer';
import AddMedications from './Components/AddMedications'
import EditMedications from './Components/EditMedications'
import Footer from './Components/Footer'
const App =(props) => {
  const [openAddModal, setAddOpenModal] = useState(false)
    
  return (
    <div className="App">
      App Container
      <Header/>
    {/* <AddMedications
    show={openAddModal}
    onHide={() => setModalShow(false)}
    /> */}
    <MedicationContainer
      />

      
      {/* {openAddModal ===true

? <>
<AddMedications setOpenModal = {setAddOpenModal}
addMedications={props.addMedications}
/>
</>
:<></>}
      <> */}
      
      {/* </>
      <> */}
      
      {/* </>
      <>
      <Footer/>
      </> */}
    </div>
  );
}

export default App;
