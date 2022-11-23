import React, {useState, useEffect} from 'react';
import EditMedication from './EditMedications';
let baseURL = ''
if(process.env.NODE_ENV === 'development'){
  baseURL = process.env.REACT_APP_BASE_URL
} else{
  // heroku backend url
  baseURL = process.env.REACT_APP_BACKEND_URL
}
 const MedicationList = (props) => {
//  .data, deleteMedications, editMedications, openEditModal, setOpenEditModal, modalID})
// const editMedications =()=>{
//     props.setOpenEditModal(true),
//     props.editMedications()
// }
    return(
    <>
        <h2 className="medicationListHeader">Medication List</h2>
       <div className="MedicationOuter"> 
      <div className=" container medicationListHolder">
      {props.medications.map((medication) =>{
        return(
            <>
          <div className='c md:flex flex-wrap backgroundGRAY'
            key={medication.id}
            > 
             <div  id={medication.id}className="individualMedicationContainer"
        // onClick={()=>setOpenModal(true)}
        >
<div className="medication-list">
            <p className='medication-name'>
                Name: {medication.name}
            </p>
            <p className ='medication-qty'>
                QTY: {medication.quantity}
            </p>
            <p className ='medication-dosage'>
                Dosage Frequency: {medication.dosage_frequency}
            </p>
            <p className ='medication-refill_date'> Refill Date: {medication.refill_date}</p>
            <p className ='medication-refill-remaining'>
                Refill Remaining: {medication.refill_remaining}
            </p>
            <p className='medication-notes'>
                Notes: {medication.notes}
            </p>
            {/* <p className =''>
                Created at: {medication.created_at}</p> */}
            <div className='edit-deleteBtn'>
                <div type='button' className='editbtn'
                //click edit will open the edit page model
                
                // {...medication.id === medication.id}
                onClick={() =>
                    props.setOpenEditModal(true)
                }
                // onClick={() => display === true}
                 >Edit</div>
                
                <div type='button' className='deleteBtn' onClick={()=>props.deleteMedications(medication.id)}>Delete
                </div>
            </div> 
            </div> 
        </div>
            
            
            </div>
            
        </>
        )
      }
      )}
      </div>
      </div>
        </>
    )
}

// model type
// name = CharField()
//     quantity = CharField() #Or integerfield
//     dosage_frequency = CharField()
//     refill_date = DateField()
//     refill_remaining = IntegerField()
//     notes = CharField()
//     created_at =
export default MedicationList;
