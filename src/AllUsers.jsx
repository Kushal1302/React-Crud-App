import { Table , TableBody ,Paper , Button , TableHead , TableCell  ,TableRow , styled } from "@mui/material";
import { getUsers , deleteUser} from "./service/api";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
overflow-x:scroll;
`
const EditDeleteBtn = styled(Button)`
margin-right:10px;
`
const THead = styled(TableHead)`
& > tr{
   
   & > th{
    font-size:20px;
    font-weight:bold;
  
   }
}
`
const AllUsers = () => {
    useEffect(()=>{
        getUserDetail()

    },[])
    const [users , setUsers] = useState([])
    const getUserDetail = async () => {
        const response = await getUsers()
        console.log(response)
        setUsers(response.data)
    }
    const deleteUserData = async (id) => {
        await deleteUser(id)
        getUserDetail()
    }

    return (<>
     <Paper className="container" style={{overflowX: 'auto',}}>
    <StyledTable>
        <THead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Action</TableCell>
            </TableRow>
        </THead>
        <TableBody>
            {
            users.map(val => (
                 
                
                    <TableRow>
                <TableCell>{val.id}</TableCell>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.username}</TableCell>
                <TableCell>{val.email}</TableCell>
                <TableCell>{val.phone}</TableCell>
                <TableCell>
                    <EditDeleteBtn variant="contained" component={Link} to={`/edit/${val.id}`}>Edit</EditDeleteBtn>
                    <EditDeleteBtn variant="contained" color="error" onClick={()=>deleteUserData(val.id)}>Delete</EditDeleteBtn>
                </TableCell>
                </TableRow>
                
                
            ))
            }
            
        </TableBody>

    </StyledTable>
    </Paper>
    
    </>)
}
export default AllUsers;