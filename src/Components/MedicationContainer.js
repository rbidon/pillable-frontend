import React, {useState,useEffect, Component} from 'react';
// import css
import './MedicationContainer.css'
// import Medication List
import MedicationList from './MedicationList'
// import addMedications
import AddMedications from './AddMedications'
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
    fetch('http://localhost:8000/api/v1/medications/'+id,{
        method:'DELETE'
    })
    .then(() => {
        setMedications(medications.filter((medication)=> medication.id !==id))

        console.log(medications)
        // fetchData()
        
    }).catch(err => console.log("error message:",err))
    
}
    return (
       <>
       Medication Container
       <AddMedications addMedications={addMedications}/>
       <h2>Medication List</h2>
       { medications
       ?
      <div className="medicationListHolder">
      
      
       {medications.map((medication,idx) =>{
        return(
            <div className='medicationListContainer'  key={idx}>
                <MedicationList  deleteMedications={deleteMedications}
                data={medication}/>
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