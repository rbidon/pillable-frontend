import React,{useState,useEffect, Component} from 'react'
let baseURL= process.env.REACT_APP_.BASE_URL

class AddMedications extends  Component {
    constructor(props){
    super(props)
    this.state = {
        name:'',
        quantity: '',
        dosage_frequency:'',
        refill_date: '',
        refill_remaining: '',
        notes: '',
    }
}

    // handle the change that happen in the form
    handleChange = (event) => {
        const target= event.target
        const name = target.name
        this.setState({
            [name]: target.value,
        })
     }
     handleSubmit = (event) => {
      console.log("Add Medication")
        event.preventDefault()
        fetch(baseURL , {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then (res => res.json())
          .then (resJson => {
            console.log('NewForm - resJson', resJson) 
            this.props.handleAddMedications(resJson)
            console.log(resJson)
        })
      }
     render(){
    return (
            // making modal form
            <div className='addMedicationBackground'>
                AddMedications Section
                <div className='addMedicationContainer'>
                  <div className='closeBtn'>
                    <button type='button' 
                    // onClick={() => openAddMedication(false)}
                    > X</button>
                    </div>  
                    <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="this state.Name" value={this.state.name} onChange={this.handleChange} />
                    <input type="text" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange} />
                    <input type="text" name="dosage_frequency" placeholder="Dosage Frequency" value={this.state.dosage_frequency} onChange={this.handleChange}/>
                    <button className="btn" >Add this</button>
                    <button type='button' className='cancelBtn' 
                    
                    // onClick={() =>{
                        
                    //     openAddMedication(false)}}
                        >Cancel</button>
                    </form>
                </div>
            </div>
        )
                }
    }

    
// name = CharField()
//     quantity = CharField() #Or integerfield
//     dosage_frequency = CharField()
//     refill_date = DateField()
//     refill_remaining = IntegerField()
//     notes = CharField()
//     created_at =
export default AddMedications