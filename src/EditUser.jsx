import { FormControl, FormGroup , Button ,TextField , styled } from "@mui/material"
import { useEffect, useState } from "react"
import { getUser , editUser} from './service/api'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

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
const EditUser = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()  => {
       
         getUserData();
    } , []);
    const getUserData = async () => {
        let response = await getUser(id)
        setUser(response.data)
    }
    
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
    const EditUserDetails = async() => {
         await editUser(user , id)
        navigate('/allusers')
        
    }

    return(<>
    
    
            <Container>
               <h2>Edit User Detail</h2>
                <FormControl>
                               <TextField id="standard-basic" onChange={setValue} label="Name" variant="standard" name="name" value={user.name} />   
                </FormControl>
                <FormControl>
                               <TextField id="standard-basic" onChange={setValue} label="Username" variant="standard" name="username" value={user.username} />  
                </FormControl>
                <FormControl>
                               <TextField id="standard-basic" onChange={setValue} label="Email" variant="standard" name="email" value={user.email} />
                </FormControl>
                <FormControl>
                               <TextField id="standard-basic" onChange={setValue} label="Phone" variant="standard" name="phone" value={user.phone} />
                </FormControl>
                <FormControl>
                <Button variant="contained" onClick={EditUserDetails}>Edit User</Button>
                </FormControl>
                
            </Container>
  
    </>)
}
export default EditUser