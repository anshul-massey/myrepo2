// import { Component } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";

// export class RegistrationForm extends Component{
//   constructor(){
//     super();
//     this.state={
//       formData:{fname:"",lname:"",phone:"",email:""} // for not mixing up the states with other funcionality states we will group the similar keys into state
      
//     }
//   }
//   // handleFirstNameChange=(e)=>{ // whenver we pass reference of the function to onKeyUp event then we get the object of the occured event inside the function and we can access that particular event
//   //   this.setState({fname:e.target.value});

    
//   // }
//   // handleLastNameChange=(e)=>{ 
//   //   this.setState({lname:e.target.value});

    
//   // }
//   //We have to use only one function to call out for every input field onKeyUp
//   //we just have to write the logic on which key it will be called
//   // we just have to add key dynamically
//   handleChange=(e)=>{
//     this.setState({   //now we have to assign into nested state so we use this syntax
//       formData:{...this.state.formData , [e.target.name]:e.target.value} //now it will only insert the value for the latest input feild because we are not appending the data, we are now creating object, we are assigning new object into the formData
//     }) //we have to target key with attribute name
//   }

//   handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log(this.state.formData); // for now we are printing the form details in the console for the current state
//   }
//   render(){
//     return (
//       <Container className="mt-5">
//       <div>                                                {/*In react if you want to handle any event you don't have to  call the function, you just have to pass the reference of that function*/}
//         <form onSubmit={this.handleSubmit}>             {/*we have to decide the name attribute same name as the current state */}                                  
//           <input type="text" placeholder="Enter first name" name="fname" onKeyUp={this.handleChange}/>
//           <input type="text" placeholder="Enter last name" name="lname" onKeyUp={this.handleChange}/>
//           <input type="text" placeholder="Enter  phone" name="phone" onKeyUp={this.handleChange}/>
//           <input type="text" placeholder="Enter email" name="email" onKeyUp={this.handleChange}/>
//           <div>
//             <input type="submit" value="Register"/>
//           </div>
//         </form>

//       </div>
//       </Container>
//     )
//   }
// }


export function RegistrationForm(){
  const [formData,setFormData] = useState({fname:"",lname:"",phone:"",email:""});


  const  handleChange=(e)=>{
    setFormData({ ...formData , [e.target.name]:e.target.value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }
  return(
    <Container className="mt-5">
           <div>                                                
             <form onSubmit={handleSubmit}>             
             <input type="text" placeholder="Enter first name" name="fname" onKeyUp={handleChange}/>
             <input type="text" placeholder="Enter last name" name="lname" onKeyUp={handleChange}/>
             <input type="text" placeholder="Enter  phone" name="phone" onKeyUp={handleChange}/>
             <input type="text" placeholder="Enter email" name="email" onKeyUp={handleChange}/>
             <div>
               <input type="submit" value="Register"/>
             </div>
           </form>
         </div>
         </Container>

  );

}