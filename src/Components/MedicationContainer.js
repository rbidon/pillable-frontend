import React, {useState,useEffect, Component} from 'react';
// import Medication List
import MedicationList from './MedicationList'
let baseURL= process.env.REACT_APP_.BASE_URL

class MedicationContainer extends Component {
    constructor(props){
        super(props)
        this.state= {
            medications:[]
        }
    }
    // fetching the data properly
   // console.log("Fetching the data by that api " + baseURL)

 
    getMedications =()=>{
        fetch(baseURL)
        .then((res =>{
            if(res.status === 200){
                return res.json();
            } else{
                return [];
            }
        }))
        .then((data => {
            
            this.setState({
                medications: data.data
            })
            console.log(data.data);
        }))
    }
    componentDidMount() {
        this.getMedications()
    }

    render(){
   return (
     <div className="medication-container">
     Medication Container
     {
        this.state.medications
        ?
        <>
        {
            this.state.medications.map((medication=>{
                return(
                    // Medication List
                    <div key={medication.id}>
                        <MedicationList allmedications={medication}/>
                    </div>
                )
            }))
        }
        </>
     :
     <>
     </>
    } 
     </div>
   )
    }
}
// const MedicationContainer = () => {
//      // fetching the data properly
//     // console.log("Fetching the data by that api " + baseURL)
//   const [medications, setMedications] = useState(null)
  
//   useEffect(() => {
//     fetch(baseURL)
//       .then(res => {
//         if(res.status ===200){
//           return res.json()
//       } else{
//           console.log('no data show')
//           return []
//       }
//     })
//       .then((data => {
//         console.log(data);
//         // medications has the data from my api
//         setMedications(data)
//         console.log(medications)
//     }))
//   }, [])

//     return (
//        <>
//        Medication Container
//        { medications && medications.length >0
//        ?
//       <>
//        {medications.map((medication =>{
//         return(
//             <div key={medication.id}>
//                 <h3>Name {medication.name}</h3>
//                 <h4> Quantity: {medication.quantity}</h4>
//             </div>
//         )
//        }))
//        }
//        </>
//        : 
//        <>
//        No List
//        </>
//         } 
//         {/* {medications && <MedicationList allmedications ={medications}/>} */}

//         </>
//     )
// }

export default MedicationContainer