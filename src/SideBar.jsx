
import {Drawer } from '@mui/material';
// import ListItem from '@mui/material/ListItem';
import AddIcon from '@mui/icons-material/Add';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { NavLink } from 'react-router-dom';
const SideBar = (props) => {
   
    return (<>
        <Drawer anchor={'left'} open={props.toggle}  onClose={props.toggle}
        hideBackdrop={true} variant='persistent' ModalProps={{
            keepMounted:true
        }}
        sx={{
            '& .MuiDrawer-paper':
            {
                marginTop:'64px',
            background:"#f5f5f5",
            width:250,
            height:'calc(100vh - 64px)',
            borderRight:'none',
            padding:'10px 0 0 10px',
            '& > a':{
                fontSize:'20px',
                cursor:'pointer',
                fontWeight:"70",
                textDecoration:'none',
                listStyle:'none',
                color:'black',
                padding:'10px 0 0 10px',
                
               
            }
            }
            
        }} >
            <NavLink to={'/adduser'}> <AddIcon/>Add Users</NavLink>
            <NavLink to={'/allusers'}><FormatAlignJustifyIcon/>All Users</NavLink>
                
        </Drawer>
    </>)
}
export default SideBar