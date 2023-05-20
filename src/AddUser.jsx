import { FormControl, FormGroup , Button ,TextField , styled } from "@mui/material"
import { useState } from "react"
import {addUser} from './service/api'

const Container = styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div {
    margin-top:20px;
}
`
const initialValue = {
    name:"",
    username:"",
    email:"",
    phone:""
}
const AddUser = () => {
    
   
    const [user , setUser] = useState(initialValue)
    const setValue = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
        console.log(user)
        
    }
    const AddUserDetails = () => {
        addUser(user)
    }

    return(<>
    
    
            <Container>
               <h2>Add User Detail</h2>
                <FormControl>
                               <TextField id="standard-basic" onChange={setValue} label="Name" variant="standard" name="name" />   
                </FormControl>
                <FormControl>
                               <TextField id="standard-basic" onChange={setValue} label="Username" variant="standard" name="username" />  
                </FormControl>
                <FormControl>
                               <TextField id="standard-basic" onChange={setValue} label="Email" variant="standard" name="email"/>
                </FormControl>
                <FormControl>
                               <TextField id="standard-basic" onChange={setValue} label="Phone" variant="standard" name="phone"/>
                </FormControl>
                <FormControl>
                <Button variant="contained" onClick={AddUserDetails}>Add User</Button>
                </FormControl>
                
            </Container>
  
    </>)
}
export default AddUser