import React, {useState} from 'react'
// Import Fontawesome for styling for the add button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const AddMedicationBtn = (props)=>{
    // Show Add Medication feature when move near it 
const [hoverOverTest, setHoverOverTest] = useState(false)
console.log('Add Medication button is', props.setAddOpenModal)

const handleMouseOver= ()=>{
    setHoverOverTest(true)
}
const handleMoveOut =() => {
    setHoverOverTest(false)
}
return(
    <>
    Add Medication Button Function
    <div type="button" className=" addMedBtn rounded-full"


      onMouseOver ={handleMouseOver}
      onMouseOut={handleMoveOut} 
      onClick = {() => {
        props.setAddOpenModal(true)
      }}>
       
        {/* if hover over is true show the text */}
      
        {hoverOverTest=== true
        ?
        <div className="HoverAddText"> 
        {/* Add Medication Icon */}
          <FontAwesomeIcon className="circle-plus"icon={solid('circle-plus')} size='2x'/>
        <p>Add Medication</p>
        </div>
        : <FontAwesomeIcon className="circle-plus"icon={solid('circle-plus')} size='2x'/>

         }
        
      </div>
    </>
)
}

export default AddMedicationBtn