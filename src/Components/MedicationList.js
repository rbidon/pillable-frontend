// will render all the medications that are created 
// const MedicationList = (props) => {
//     return(
//         <div className="medication-list" 
//         // onclick={() => {
//         //     this.state.openMedicationList === true; 
//         // }}
//         >
//             <p className='medication-name'>
//                 Name: {props.allmedications.name}
//             </p>
//             <p className ='medication-qty'>
//                 QTY: {props.allmedications.quantity}
//             </p>
//             <p className ='medication-dosage'>
//                 Dosage Frequency: {props.allmedications.dosage_frequency}
//             </p>
//             <p className ='medication-refill_date'> Refill Date: {props.allmedications.refill_date}</p>
//             <p className ='medication-refill-remaining'>
//                 Refill Remaining: {props.allmedications.refill_remaining}
//             </p>
//             <p className='medication-notes'>
//                 Notes: {props.allmedications.notes}
//             </p>
//             <p className =''>
//                 Created at: {props.created_at}</p>
//             <div className='edit-deleteBtn'>
//                 <button type='button' className='btn btn-primary'>Edit</button>
//                 <button type='button' className=''>Delete</button>
//             </div>
//         </div>
//     )
// }

 const MedicationList = (props) => {
    return(
        <div className="medication-list">
            <p className='medication-name'>
                Name: {props.allmedications.name}
            </p>
            <p className ='medication-qty'>
                QTY: {props.allmedications.quantity}
            </p>
            <p className ='medication-dosage'>
                Dosage Frequency: {props.allmedications.dosage_frequency}
            </p>
            <p className ='medication-refill_date'> Refill Date: {props.allmedications.refill_date}</p>
            <p className ='medication-refill-remaining'>
                Refill Remaining: {props.allmedications.refill_remaining}
            </p>
            <p className='medication-notes'>
                Notes: {props.allmedications.notes}
            </p>
            <p className =''>
                Created at: {props.created_at}</p>
            <div className='edit-deleteBtn'>
                <button type='button' className='btn'>Edit</button>
                <button type='button' className='btn'>Delete</button>
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