import React, {useState} from 'react'

// Import Fontawesome for styling for the close button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
let baseURL= process.env.REACT_APP_.BASE_URL

const EditMedications = (props)=>{
    // {medicationsToEdit,editMedications,setOpenModal}
    const [editMedication, setEditMedication]=useState(props.data)

    const handleChange = (e) =>{
        setEditMedication({
            ...editMedication, [e.target.name]:e.target.value
        })
    }
    // fetch data and post the update 
    const updateMedications = (id)=>{
        fetch(baseURL 
            +id,{
            method: 'PUT',
            body: JSON.stringify(editMedication),
            headers:{
                "Content-Type": "application/json",
              }
        })
        .then(res => res.json())
        .then (resJson => {
                console.log('Update medication has been added - resJson', resJson)
            setEditMedication(editMedication)
        
        })
        .catch((err) => console.log('error', err))
    }
    const handleSubmit=(e) =>{
        e.preventDefault()
        props.editMedications(editMedication)
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
    }

    return(
        // making modal form
        <div className='MedicationBackground'>
        Edit Medication Section
        <div className='closeBtn'>
        <div type='button' 
            onClick={() => props.setEditOpenModal(false)}
            > 
            <FontAwesomeIcon icon={solid('x')}/>
        </div>
        </div>
            <form className="AddEditForm"onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={editMedication.name} onChange={handleChange} />
            <input type="text" name="quantity" placeholder="Quantity" value={editMedication.quantity} onChange={handleChange} />
            <input type="text" name="dosage_frequency" placeholder="Dosage Frequency" value={editMedication.dosage_frequency} onChange={handleChange}/>
            <input type="date" name="refill_date" placeholder="Refill Date" value={editMedication.refill_date} onChange={handleChange}/>
            <input type="number" name="refill_remaining" placeholder="Refill Remaining" value={editMedication.refill_remaining} onChange={handleChange}/>
            <textarea name="notes" placeholder="Notes" value={editMedication.notes} onChange={handleChange}>
            {editMedication.notes}
            </textarea>
            <div className="editCancelButton">
            <div type="submit"  className="EditAddBtn" > Edit Medication</div>
            <div type='button' className='cancelBtn' 
            
            onClick={() =>{
                
                props.setEditOpenModal(false)}}
                >Cancel</div>
            </div>
            </form>
        </div>
    )
}

export default EditMedications