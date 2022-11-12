import React from 'react';

 const MedicationList = ({data, deleteMedications,setOpenModal}) => {
    // console.log("{data in MedicationList Component"{data)
    return(
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
                <button type='button' className='btn'>Edit</button>
                <button type='button' className='btn' onClick={()=>deleteMedications(data.id)}>Delete</button>
            </div>
        </div>
        </div>
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