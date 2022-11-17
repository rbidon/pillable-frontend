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



//  open the Add Medication modal
const [openAddModal, setAddOpenModal] = useState(false)
// OPEN THE EDIT MODAL
const [openEditModal, setEditOpenModal]= useState(false);
console.log('edit modal is now', openEditModal)
console.log('the open add modal is now',openAddModal)


    return (
       <>
       Medication Container
        {/* Add Medication Components / model function*/}
      {/* <div className='openModal bg-green-800 rounded-full flex
      transition ease-in' */}
      
      <> 
        <h2>Medication List</h2>
        
       {props.medications
       ?
      <div className="medicationListHolder">
      
      
       {props.medications.map((medication,idx) =>{
        return(
          <>
            <div className='c md:flex flex-wrap backgroundGRAY'
            key={idx}
            > 
                <MedicationList 
                data={medication}
                deleteMedications={props.deleteMedications}
                editMedications={props.editMedications}
                openEditModal={openEditModal}
                setEditOpenModal={setEditOpenModal}
                />    
                
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

        

      </> 

    )   
}

export default MedicationContainer