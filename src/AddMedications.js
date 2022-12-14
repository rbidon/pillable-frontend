import React,{useState} from 'react'

// Import Fontawesome for styling for the close button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


let baseURL= process.env.REACT_APP_BASE_URL
// 
// class AddMedications extends  Component {
//     constructor(props){
//     super(props)
//     addmedication = {
//         name:'',
//         quantity: '',
//         dosage_frequency:'',
//         refill_date: '',
//         refill_remaining: '',
//         notes: '',
//     }
// }

//     // handle the change that happen in the form
//     handleChange = (event) => {
//         const target= event.target
//         const name = target.name
//         thiaddmedication({
//             [name]: target.value,
//         })
//      }
//      handleSubmit = (event) => {
//       console.log("Add Medication")
//         event.preventDefault()
//         fetch(baseURL , {
//           method: 'POST',
//           body: JSON.stringify(addmedication),
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }).then (res => res.json())
//           .then (resJson => {
//             console.log('NewForm - resJson', resJson) 
//             props.handleAddMedications(resJson)
//             console.log(resJson)
//         })
//       }
//      render(){
//     return (
//             // making modal form
//             <div className='addMedicationBackground'>
//                 AddMedications Section
//                 <div className='addMedicationContainer'>
//                   <div className='closeBtn'>
//                     <button type='button' 
//                     // onClick={() => openAddMedication(false)}
//                     > X</button>
//                     </div>  
//                     <form onSubmit={handleSubmit}>
//                     <input type="text" name="name" placeholder="addmedication.Name" value={addmedication.name} onChange={handleChange} />
//                     <input type="text" name="quantity" placeholder="Quantity" value={addmedication.quantity} onChange={handleChange} />
//                     <input type="text" name="dosage_frequency" placeholder="Dosage Frequency" value={addmedication.dosage_frequency} onChange={handleChange}/>
//                     <button className="btn" >Add /button>
//                     <button type='button' className='cancelBtn' 
                    
//                     // onClick={() =>{
                        
//                     //     openAddMedication(false)}}
//                         >Cancel</button>
//                     </form>
//                 </div>
//             </div>
//         )
//                 }
//     }

const AddMedications = ({addMedications,setOpenModal })=> {
  // start with clear 
  const [addmedication, setAddMedication] =useState({
        name:'',
        quantity: '',
        dosage_frequency:'',
        refill_date: '',
        refill_remaining: '',
        notes: '',
  })
  // handle the change from the form
  const handleChange = (event) =>{
    event.preventDefault()
    setAddMedication({...addmedication, [event.target.name]:event.target.value})
  }
  // fetch the data 
   const saveAddMedications = () =>{
    fetch(`${baseURL}/api/v1/medications/`,{
      method:'POST',
      body: JSON.stringify(addmedication),
      headers:{
        "Content-Type": "application/json",
        // credentials: "include"
      }
    })
      .then(res => res.json(), addMedications(addmedication) )
      .then (resJson => {
                  console.log('New medication has been added - resJson', resJson)
                 
    })
      .catch((err) => console.log('error'))
  } 

  // fetchdata to post 
  // handle the submit form
  const handleSubmit = (event) =>{
  event.preventDefault() 
  saveAddMedications()
  console.log("data has been submitted", addmedication)
  setAddMedication(
        {name:'',
        quantity: '',
        dosage_frequency:'',
        refill_date: '',
        refill_remaining: '',
        notes: '',
      })
    setOpenModal(false)
  }

    return(
     // making modal form
<div className=' fixed MedicationBackground'>
               

           
                <div className='MedicationContainer'> 
                {/* <div className="ContainerforCloseandEdit"> */}
                
                <div className='closeBtn'>
                  
                    <div type='button' 
                    onClick={() => setOpenModal(false)}
                    > 
                     <FontAwesomeIcon icon={solid('x')}/></div>


                    </div>  
                    {/* <div className="addEditHeader"> */}
                  <h2 className="addMedicationHeader">Add New Medication </h2>
                {/* </div> */}
                {/* </div> */}
                 
                    <form className="AddEditForm" onSubmit={handleSubmit}
                    >
                    {/* <label htmlFor="name">Name</label> */}
                    <input type="text" name="name" id="name" placeholder="Name" value={addmedication.name} onChange={handleChange} />
                    <input type="text" name="quantity" placeholder="Quantity" value={addmedication.quantity} onChange={handleChange} />
                    <input type="text" name="dosage_frequency" placeholder="Dosage Frequency" value={addmedication.dosage_frequency} onChange={handleChange}/>
                    {/* <input type="date" name="refill_date" placeholder="Refill Date" value={addmedication.refill_date} onChange={handleChange}/> */}
                    <input type="number" name="refill_remaining" placeholder="Refill Remaining" value={addmedication.refill_remaining} onChange={handleChange}/>
                    <textarea name="notes" placeholder="Notes" value={addmedication.notes} onChange={handleChange}
                    rows="8" cols="60" maxLength="50">
                    {addmedication.notes}
                    </textarea>
                    <div className="editCancelButton">
                    <input type="submit" className="EditAddBtn"
                    value='Add Medication' 
                    />
                    <div type='button' className='cancelBtn' 
                    
                    onClick={() =>{
                        
                        setOpenModal(false)}}
                        >Cancel</div> 
                        </div>
                    </form>
                   
                </div>
            </div>
  )
}


    
// name = CharField()
//     quantity = CharField() #Or integerfield
//     dosage_frequency = CharField()
//     refill_date = DateField()
//     refill_remaining = IntegerField()
//     notes = CharField()
//     created_at =
export default AddMedications