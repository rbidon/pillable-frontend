import React, {useState,useEffect} from 'react';
import EditMedications from './EditMedications';
// import css
import './MedicationContainer.css'
// import Medication List
import MedicationList from './MedicationList'
// import Edit Medication 
// import EditMedication from './EditMedications'
// import Modal from 'react-bootstrap/Modal';



// let baseURL = ''
// if(process.env.NODE_ENV === 'development'){
//   baseURL = process.env.REACT_APP_BASE_URL
// } else{
//   // heroku backend url
//   baseURL = process.env.REACT_APP_API_URL
// }
// }let baseURL= process.env.REACT_APP_BASE_URL
// testing

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

const MedicationContainer = (props) => {
console.log(props.medications)


//  open the Show Medication modal
return(
  <>
   {props.openEditModal ===true
   ?<>
    <EditMedications
     medications={props.medications}
      editMedications={props.editMedications}
        EditOpenModal={props.setOpenEditModal}
         />
   </>
   :<>
    <h2 className="medicationListHeader">Medication List</h2>
       <div className="MedicationOuter"> 
      <div className=" container medicationListHolder">
      <>
   {props.medications.map((medication =>{
    return(
    <div key={medication.id}>
               <MedicationList 
   medication={medication}             deleteMedications={props.deleteMedications}
    editMedications={props.editMedications}
    openEditModal={props.openEditModal}setOpenEditModal={props.setOpenEditModal}
    />
     </div>
    )
  })
  )}
  </>
      </div>
      </div>
   </>
  }
  </>
)
  //   return (
  //   <>
  //   {props.medications.map((medication =>{
      
  //   if(props.openEditModal ===true){
  //     return( 
  //     <>
  //     <EditMedications
  //     medications={medication}
  //     editMedications={props.editMedications}
  //     EditOpenModal={props.setOpenEditModal}
  //   />
  //     </>
  //     )
  //   } else{
      
  //     return(
  //     <>
  //     <h2 className="medicationListHeader">Medication List</h2>
  //     <div className="MedicationOuter"> 
  //     <div className=" container medicationListHolder">
       
  //         <div key ={medication.id}>
           
  //          <MedicationList 
                
  //               medication={medication}
  //               deleteMedications={props.deleteMedications}
  //               editMedications={props.editMedications}
  //               openEditModal={props.openEditModal}
  //               setOpenEditModal={props.setOpenEditModal}
  //              />
  //         </div>
  //         </div>
  //     </div>
  //     </>
  //     )
      
      
      
  //   }
  //   }))} 
  //   </>
  // )
}

{/* <MedicationList 
                
                medications={props.medications}
                deleteMedications={props.deleteMedications}
                editMedications={props.editMedications}
                openEditModal={props.openEditModal}
                setOpenEditModal={props.setOpenEditModal}
                />  */}

export default MedicationContainer