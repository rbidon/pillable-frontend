import React, {useState} from 'react';

 const MedicationList = (props) => {
//  .data, deleteMedications, editMedications, openEditModal, setOpenEditModal, modalID})

const pasingEditMedicationDate =()=>{
//    props.editMedications(props.medication)
    props.setOpenEditModal(true)
}
//     props.editMedications(props.medication.id),
// }
    return(
    <>
        
       
     
            <>
          <div className='c md:flex flex-wrap backgroundGRAY'
            // key={medication.id}
            > 
             <div  id={props.medication.id}className="individualMedicationContainer"
        // onClick={()=>setOpenModal(true)}
        >
<div className="medication-list">
            <p className='medication-name'>
                Name: {props.medication.name}
            </p>
            <p className ='medication-qty'>
                QTY: {props.medication.quantity}
            </p>
            <p className ='medication-dosage'>
                Dosage Frequency: {props.medication.dosage_frequency}
            </p>
            {/* <p className ='medication-refill_date'> Refill Date: {props.medication.refill_date}</p> */}
            <p className ='medication-refill-remaining'>
                Refill Remaining: {props.medication.refill_remaining}
            </p>
            <p className='medication-notes'>
                Notes: {props.medication.notes}
            </p>
            {/* <p className =''>
                Created at: {medication.created_at}</p> */}
            <div className='edit-deleteBtn'>
                <div type='button' className='editbtn'
                //click edit will open the edit page model
                
                // {...medication.id === medication.id}
                onClick={
                    pasingEditMedicationDate
                }
                
                // onClick={() => display === true}
                 >Edit</div>
                
                <div type='button' className='deleteBtn' onClick={()=>props.deleteMedications(props.medication.id)}>Delete
                </div>
            </div> 
            </div> 
        </div>
            
            
            </div>
            
        </>
      

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
