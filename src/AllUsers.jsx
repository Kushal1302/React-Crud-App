import { Table , TableBody , TableHead , TableCell  ,TableRow , styled } from "@mui/material";
import { getUsers } from "./service/api";
import { useEffect , useState } from "react";

const StyledTable = styled(Table)`
width:90%;
margin:50px auto 0 auto;
overflow-x:scroll;

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

    return (<>
    <StyledTable>
        <THead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
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
                </TableRow>
                
                
            ))
            }
            
        </TableBody>

    </StyledTable>
    
    </>)
}
export default AllUsers;