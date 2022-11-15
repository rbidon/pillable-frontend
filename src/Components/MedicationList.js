import React, {useState} from 'react';
import EditMedication from './EditMedications';
 const MedicationList = ({data, deleteMedications,editMedications,setEditOpenModal,openEditModal}) => {
    // console.log("{data in MedicationList Component"{data)
    // OPEN THE EDIT MODAL
    // const [openEditModal, setEditOpenModal]= useState(false);
    console.log('edit modal is now', openEditModal)
    return(
    <>
       {/* {openEditModal === true
       
        ?<>
        <EditMedication
          medicationsToEdit={data}
          editMedications={editMedications}
          openEditModal={openEditModal}
          setEditOpenModal={setEditOpenModal}
          />
        </>
        : */}
        <div id={data.id}className="individualMedicationContainer"
        // onClick={()=>setOpenModal(true)}
        >

            {/* only show when the modal is open */}
            {/* <button className="exitBtn"
            onClick={() =>{
                setOpenModal(false);
            }}>X</button> */}
        <div className="medication-list">
            <p className='medication-name'>
                Name: {data.name}
            </p>
            <p className ='medication-qty'>
                QTY: {data.quantity}
            </p>
            <p className ='medication-dosage'>
                Dosage Frequency: {data.dosage_frequency}
            </p>
            <p className ='medication-refill_date'> Refill Date: {data.refill_date}</p>
            <p className ='medication-refill-remaining'>
                Refill Remaining: {data.refill_remaining}
            </p>
            <p className='medication-notes'>
                Notes: {data.notes}
            </p>
            <p className =''>
                Created at: {data.created_at}</p>
            <div className='edit-deleteBtn'>
                <div type='button' className='editbtn'
                //click edit will open the edit page model
                onClick={() =>setEditOpenModal(true)}
                
                 >Edit</div>
                 
                <div type='button' className='deleteBtn' onClick={()=>deleteMedications(data.id)}>Delete
                </div>
            </div>
        </div>
      </div>
       
        {/* } */}
   
        {/* <EditMedication
            medicationsToEdit={data}
           editMedications={editMedications}
          setEditOpenModal={setEditOpenModal}
        /> */}  
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
export default MedicationList