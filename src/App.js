import React, {useState, useEffect} from 'react';
import './App.css'
import './MedicationContainer.css'


// import Header
import Header from './Header';
import AddMedicationBtn from './AddMedicationBtn'
import MedicationContainer from './MedicationContainer'
import AddMedications from './AddMedications'
import Footer from './Footer'

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
        fetch(`${baseURL}/api/v1/medications/`)
          .then(res => {
            if(res.status === 200){
              return res.json()
          } else{
              console.log('no data show')
              return []
          }
        })
          .then((medications => {
            // console.log("Before the setMedication" ,data);
            // medications has the data from my api
            // setMedications(medications =>[...medications,data])
            // console.log(setMedications(medications =>[...medications,data]))
            setMedications(medications.data)
            console.log("data",medications, medications.data)
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
        fetch(`${baseURL}/api/v1/medications/${id}`,{
            method:'DELETE'
        })
        .then(
          console.log('data has been deleted'),
          setMedications(medications.filter((medication)=> medication.id !==id))
      )
        .catch(err => console.log("error message:",err))
        console.log(medications)
    }
    useEffect(() => {deleteMedications()}, []);
    
    // EDIT MEDICATION
    const editMedications =(updateMedication) =>{
      setMedications((update)=>{
        return update.map((p)=>{
          if(p.id === updateMedication.id){
            return update
          } else{
            return p 
          }
        })
      })
    }
      // let newMedicationsArr = medications.map((medication)=>{
      //   if(medication.id=== updateMedication.id){
      //     console.log("updateMedication information:",updateMedication)
      //     return updateMedication
          
      //   } else{
      //     console.log("medication information:",medication)
      //     return medication
      //   }
      // })
      // setMedications(newMedicationsArr)
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
         
    // }
  //+++++++++++++++++++++++++++++++++++++++++++
// Styling selection for the open modal 
//++++++++++++++++++++++++++++++++++++++++++++=
  const [openAddModal, setAddOpenModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  console.log('Status of the edit modal is now', openEditModal)
  const openShowModal = useState()
  return (
    <div className="App">
      
     
      <Header/>

      {/* open the modal effect for the edit, add & show buttons */}
      {(() =>{
        if(openAddModal === true){
        return( 
        <>
        <AddMedications
        setOpenModal = {setAddOpenModal}
        addMedications = {addMedications}
        /> 
        </>

        )
      }
      // else if(openEditModal === true){
      //   return( 
      //     <>
      //     <EditMedications
      //     data={medications}
      //     openEditModal={openEditModal}
      //     setOpenEditModal={setOpenEditModal}/>
      //       </>
      //   )
      // }
      else{
        return(
          <>
        <AddMedicationBtn
        setAddOpenModal={setAddOpenModal}/>
        <div className="medicationsOverall">
        <MedicationContainer
        medications={medications}
          deleteMedications={deleteMedications}
        editMedications={editMedications}
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        />   
        </div>
       </>
        )
      }
    })()}
      {/* {openAddModal === true 
      ?
       
      :<>
      <AddMedicationBtn
      setAddOpenModal={setAddOpenModal}/>
      <div className="medicationsOverall">
      <MedicationContainer
      medications={medications}
      deleteMedications={deleteMedications}
      editMedications={editMedications}
      // openEditModal={openEditModal}
      EditOpenModal={setOpenEditModal}
      />   
      </div>
       </> */}

  {/* {openEditModal ===true
    ?<>
    <EditMedications
    editMedications={editMedications}
    EditOpenModal={setOpenEditModal}
    />
    </>
    :<>
     <AddMedicationBtn
    setAddOpenModal={setAddOpenModal}/>
    <div className="medicationsOverall">
    <MedicationContainer
    medications={medications}
    deleteMedications={deleteMedications}
    editMedications={editMedications}
    // openEditModal={openEditModal}
    EditOpenModal={setOpenEditModal}
    />  
    </div> 
    </> 
    } */}
     
  
       

   
   
    
    <>
     <Footer/>
      </>
      </div>
  )
  
}

export default App;
