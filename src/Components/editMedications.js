import React, {useState, useEffect} from 'react'
// Import Fontawesome for styling for the close button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

let baseURL = ''
if(process.env.NODE_ENV === 'development'){
  baseURL = process.env.REACT_APP_BASE_URL
} else{
  // heroku backend url
  baseURL = process.env.REACT_APP_API_URL
}
console.log("baseURL:" ,baseURL)

const EditMedications = (props)=>{
// props.setEditOpenModal,editMedications})
    // {medicationsToEdit,editMedications,setOpenModal}
    // const [editMedication, setEditMedication]=useState(props.medications)
    const [editMedication, setEditMedication]=useState(props.medications)
    console.log("data from the container is now","EditMedication[0]",editMedication[0],"props.medication", props.medications.id)
    // console.log("data id is now",editMedication.id)
    // console.log('Medication to edit',editMedication.id)
    const handleChange = (e) =>{
        e.preventDefault()
        setEditMedication({
            ...editMedication, [e.target.name]:e.target.value
        })
        // console.log('Handle Change set', editMedication)
    }
        // fetch data and post the update 
        const updateMedications = (id)=>{
            console.log('data has been updated')
            fetch(`${baseURL}/api/v1/medications/${editMedication}`,{
                method: 'PUT',
                body: JSON.stringify(editMedication),
                headers:{
                    "Content-Type": "application/json",
                  }
            })
            .then(res => res.json())
            .then (resJson => {
                console.log('edited medication,', editMedication)
                    console.log('Update medication has been added - resJson', resJson)
                    
                    props.editMedications(editMedication)
                    console.log('Medication to edit', editMedication)
            
                })
                
            .catch((err) => console.log('error', err))
            console.log(editMedication)
        }
        useEffect(() => {updateMedications()}, []);

    const handleSubmit=(e) =>{
        e.preventDefault()
        
        updateMedications()
        console.log('Updated the data',editMedication)
        setEditMedication({
        name:'',
        quantity: '',
        dosage_frequency:'',
        refill_date: '',
        refill_remaining: '',
        notes: '',
        })
        props.EditOpenModal(false)
    }



    return(
        // making modal form
        <div id={editMedication.id}className='MedicationBackground editMedications'>
        {/* Edit Medication Section */}
        <div className='MedicationContainer'>
        <div className='closeBtn'>
        <div type='button' 
            onClick={() => props.EditOpenModal(false)}
            > 
            <FontAwesomeIcon icon={solid('x')}/>
        </div>
        </div>
        {/* <div className="addEditHeader"> */}
        <h2 className="addMedicationHeader">Edit Medication </h2>
                {/* </div> */}

            <form className="AddEditForm"
            onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={editMedication.name} onChange={handleChange} />
            <input type="text" name="quantity" placeholder="Quantity" value={editMedication.quantity} onChange={handleChange} />
            <input type="text" name="dosage_frequency" placeholder="Dosage Frequency" value={editMedication.dosage_frequency} onChange={handleChange}/>
            <input type="date" name="refill_date" placeholder="Refill Date" value={editMedication.refill_date} onChange={handleChange}/>
            <input type="number" name="refill_remaining" placeholder="Refill Remaining" value={editMedication.refill_remaining} onChange={handleChange}/>
            <textarea name="notes" placeholder="Notes" value={editMedication.notes} onChange={handleChange}>
            {editMedication.notes}
            </textarea>
            <div className="editCancelButton">
            <button type='submit' className="EditAddBtn"> Edit Medication</button>
            <div type='button' className='cancelBtn' 
            
            onClick={() =>{
                
                props.EditOpenModal(false)}}
                >Cancel</div>
            </div>
            </form>
        </div>
        </div>
    )
}

export default EditMedications