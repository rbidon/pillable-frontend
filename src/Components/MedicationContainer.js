import React, {useState,useEffect} from 'react';
// import css
import './MedicationContainer.css'
// import Medication List
import MedicationList from './MedicationList'
// import addMedications
import AddMedications from './AddMedications'
// import Edit Medication 
import EditMedication from './EditMedications'
import Modal from 'react-bootstrap/Modal';

// Import Fontawesome for styling for the add button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

let baseURL = ''
if(process.env.NODE_ENV === 'development'){
  baseURL = process.env.REACT_APP_BASE_URL
} else{
  // heroku backend url
  baseURL = process.env.REACT_APP_API_URL
}
// }let baseURL= process.env.REACT_APP_BASE_URL

// class MedicationContainer extends Component {
//     constructor(props){
//         super(props)
//         this.state= {
//             medications:[],
//             // openMedicationList: false
//         }
//     }
    
//     addMedications =(medication) =>{
//         console.log("Parent AddMedications")
//         // const copyMedications = [...this.state.medications]
//         //  copyMedications.unshift(medication)
//         //  console.log( "Before AddMedications" + this.state.medications)
//          this.setState([
//              ...this.state.medications, medication
//          ])
//          this.getMedications()
//         //  console.log( "After AddMedications" + this.state.medications)
//      }
//     // fetching the data properly
//    // console.log("Fetching the data by that api " + baseURL)
//     getMedications =()=>{
//         fetch(baseURL)
//         .then((res =>{
//             if(res.status === 200){
//                 return res.json();
//             } else{
//                 return [];
//             }
//         }))
//         .then((data => {
            
//             this.setState({
//                 medications: data.data
//             })
//             console.log(data.data);
//         }))
//     }
//     componentDidMount() {
//         this.getMedications()
//     }

    
//     render(){
//    return (
//      <div className="medications-holder">
//      Medication Container
//      <AddMedications handleAddMedications={this.addMedications}/>
//      {
//         this.state.medications.length
//         ?
//         <>
        
//         {
//             this.state.medications.map((medication,index)=>{
//                 return(
//                     // Medication List
//                     <div className='medication-container'>
//                         <div className='medications-holder'
//                         key={index}>
//                         <MedicationList medicationList={medication}
//                         //  openMedicationList = {this.state.openMedicationList}
//                          />
//                          </div>
//                     </div>
//                 )
//             })
//         }
//         </>
//      :
//      <>
//      </>
//     } 
//      </div>
//    )
//     }
// }

const MedicationContainer = () => {
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
    fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`,{
        method:'DELETE'
    }).then(
      console.log('data has been deleted'),
      setMedications(medications.filter((medication)=> medication.id !==id))
    ).catch(err => console.log("error message:",err))
    console.log(medications)
}

// EDIT MEDICATION 
const editMedications =(updateMedication,e) =>{
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
//  open the Add Medication modal
const [openAddModal, setAddOpenModal] = useState(false)
// OPEN THE EDIT MODAL
const [openEditModal, setEditOpenModal]= useState(false);
console.log('edit modal is now', openEditModal)
console.log('the open add modal is now',openAddModal)
// Show Add Medication feature when move near it 
const [hoverOverTest, setHoverOverTest] = useState(false)


const handleMouseOver= ()=>{
    setHoverOverTest(true)
}
const handleMoveOut =() => {
    setHoverOverTest(false)
}

    return (
       <>
       Medication Container
        {/* Add Medication Components / model function*/}
      {/* <div className='openModal bg-green-800 rounded-full flex
      transition ease-in' */}
      <div type="button" className=" addMedBtn rounded-full"


      onMouseOver ={handleMouseOver}
      onMouseOut={handleMoveOut} 
      onClick = {() => {
        setAddOpenModal(true)
      }}>
       
        {/* if hover over is true show the text */}
      
        {hoverOverTest=== true
        ?
        <div className="HoverAddText"> 
        {/* Add Medication Icon */}
          <FontAwesomeIcon className="circle-plus"icon={solid('circle-plus')} size='2x'/>
        <p>Add Medication</p>
        </div>
        : <FontAwesomeIcon className="circle-plus"icon={solid('circle-plus')} size='2x'/>

         }
        
      </div>
  <div>
   {
   (() =>{
    if (openAddModal ===true){
      return(
         <>
        <AddMedications 
        setOpenModal = {setAddOpenModal}
        addMedications={addMedications}/>
       
        </>
      )
      }   
    // } else if(openEditModal ===true){
    //   return(
    //     <>
    //     <EditMedication
        
    //     />
    //     </>
    //   )
    // }
    else{
      return(
      <> 
        <h2>Medication List</h2>
       { medications
       ?
      <div className="medicationListHolder">
      
      
       {medications.map((medication,idx) =>{
        return(
          // <>
          // {openEditModal ===true
          //   ?<EditMedication
          //   medicationsToEdit={medication}
          //   editMedications={editMedications}
          //   openEditModal={openEditModal}
          //   setEditOpenModal={setEditOpenModal}
          //   />
          //   :
          <>
            <div className='c md:flex flex-wrap backgroundGRAY'
            key={idx}
            > 
                <MedicationList 
                data={medication}
                deleteMedications={deleteMedications}
                editMedications={editMedications}
                openEditModal={openEditModal}
                setEditOpenModal={setEditOpenModal}
                />    
                <>
                <EditMedication
                 data={medication}
                 editMedications={editMedications}
                 openEditModal={openEditModal}
                 setEditOpenModal={setEditOpenModal}/>
                 </>
                </div>
            </>
            // }
            // </>
        )
       })
       }
       </div>
       : 
       <>
       No List
       </>
        } 

        </>
      ) 
      }
    })()
  }
</div>
        

      </> 

    )   
}

export default MedicationContainer