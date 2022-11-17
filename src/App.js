import React, {useState, useEffect} from 'react';
import './App.css'
import './Components/MedicationContainer.css'
// import Header
import Header from './Components/Header';
import AddMedicationBtn from './Components/AddMedicationBtn'
import MedicationContainer from './Components/MedicationContainer'
import AddMedications from './Components/AddMedications'
// import EditMedications from './Components/EditMedications'
// import Footer from './Components/Footer'

let baseURL = ''
if(process.env.NODE_ENV === 'development'){
  baseURL = process.env.REACT_APP_BASE_URL
} else{
  // heroku backend url
  baseURL = process.env.REACT_APP_BACKEND_URL
}

const App =() => {
       // fetching the data properly
    // console.log("Fetching the data by that api " + baseURL)
    const [medications, setMedications] = useState([])
    //  Fetching the data by that api
      const fetchData = () => {
        fetch(baseURL)
          .then(res => {
            if(res.status === 200){
              return res.json()
          } else{
              console.log('no data show')
              return []
          }
        })
          .then((data => {
            // console.log("Before the setMedication" ,data);
            // medications has the data from my api
            // setMedications(medications =>[...medications,data])
            // console.log(setMedications(medications =>[...medications,data]))
            setMedications(data.data)
            console.log(medications, data)
        }))
      }
      useEffect(() => {
        fetchData()
      }, []);
    
    //   adding new medications from create
    const addMedications = (medication) => {
        setMedications([...medications,medication])
    }
    // delete medications/fetch data
    const deleteMedications =(id) =>{
        console.log('data has been deleted')
        // there is a slash in the
        fetch(`${baseURL}${id}`,{
            method:'DELETE'
        }).then(
          console.log('data has been deleted'),
          setMedications(medications.filter((medication)=> medication.id !==id))
        ).catch(err => console.log("error message:",err))
        console.log(medications)
    }
    
    // EDIT MEDICATION
    const editMedications =(updateMedication) =>{
      let newMedicationsArr = medications.map((medication)=>{
        if(medication.id=== updateMedication.id){
          return updateMedication
        } else{
          return medication
        }
      })
      setMedications(newMedicationsArr)
      //  setMedications((previousMedication) => previousMedication.map((m) => {
      //       if(m.id === medication.id){ console.log(medication)
      //       return medication
           
      //     }else{
      //       return m
      //       console.log(m)
      //     }
      //     }))
      // setMedications((update)=>{
      //   return update.map((med) =>{
      //     if(med.id === medication.id){
      //       return medication
      //     }else{
      //       return med
      //     }
      //   })
      // let newMedicationsArr = medications.map((medication)=>{
      //   if(medication.id=== updateMedication.id){
      //     return updateMedication
      //   } else{
      //     return medication
      //   }
      // })
      // setMedications(newMedicationsArr)
         
    }
  //+++++++++++++++++++++++++++++++++++++++++++
// Styling selection for the open modal 
//++++++++++++++++++++++++++++++++++++++++++++=
  const [openAddModal, setAddOpenModal] = useState(false)
  return (
    <div className="App">
      App Container
      <Header/>
      {openAddModal === true 
      ? <>
      <AddMedications
      setOpenModal = {setAddOpenModal}
      addMedications = {addMedications}
        />
        </>
      :<>
      <AddMedicationBtn
      setAddOpenModal={setAddOpenModal}/>
      <MedicationContainer
      medications={medications}
      deleteMedications={deleteMedications}
      editMedications={editMedications}
      // openEditModal={openEditModal}
      // setEditOpenModal={setEditOpenModal}
      />
      </>
      
  }      
  {/* <>
      <Footer/>
    </>      */}
    </div>
   
  )
  
}

export default App;
