// will render all the medications that are created 
 const MedicationList = (props) => {
    return(
        <div className="medication-list">
            <h2 className='medication-name'>
                Name: {props.allmedications.name}
            </h2>
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