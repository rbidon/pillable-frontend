import React,{useState,useEffect, Component} from 'react'

const AddMedications = ({openAddMedication}) =>{
    


        return (
            // making modal form
            <div className='addMedicationBackground'>
                AddMedications Section
                <div className='addMedicationContainer'>
                  <div className='closeBtn'>
                    <button type='button' onClick={() => openAddMedication(false)}
                    > X</button>
                    </div>  
                </div>
            </div>
        )
    }

export default AddMedications