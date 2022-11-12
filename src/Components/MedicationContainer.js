import React, {useState,useEffect} from 'react';
// import css
import './MedicationContainer.css'
// import Medication List
import MedicationList from './MedicationList'
// import addMedications
import AddMedications from './AddMedications'
// import Edit Medication 
import EditMedication from './EditMedications'


// Import Fontawesome for styling for the add button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

let baseURL= process.env.REACT_APP_.BASE_URL

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
    fetch('http://localhost:8000/api/v1/medications/'+id,{
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
      // setMedications((previousMedication) => previousMedication.map((m) => {
      //   if(m.id === medication.id){
      //   return medication
      //   console.log(medication)
      // }else{
      //   return m
      //   console.log(m)
      // }
      // }))
}

//+++++++++++++++++++++++++++++++++++++++++++
// Styling selection for the open modal 
//++++++++++++++++++++++++++++++++++++++++++++=
//  open the modal
const [openModal, setOpenModal] = useState(false)
// console.log(openModal)
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
      <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"


      onMouseOver ={handleMouseOver}
      onMouseOut={handleMoveOut} 
      onClick = {() => {
        setOpenModal(true)
      }}>
        Add Medication Icon
        <FontAwesomeIcon icon={solid('circle-plus')} size='2x'/>
        {hoverOverTest && <h3>Add Medication</h3>}
      </button>
      {/* if hover over is true show the text */}
      
      {openModal && <AddMedications setOpenModal = {setOpenModal}addMedications={addMedications}/>}
       <h2>Medication List</h2>
       { medications
       ?
      <div className="medicationListHolder">
      
      
       {medications.map((medication,idx) =>{
        return(
            <div className='medicationListContainer md:flex flex-wrap'  key={idx}>
                <MedicationList  
                data={medication}
                deleteMedications={deleteMedications}
                // editMedications={editMedication}
                setOpenModal={setOpenModal}
                />
                <EditMedication
                data={medication}
                editMedications={editMedications}
                setOpenModal={setOpenModal}
                />
            </div>
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

export default MedicationContainer