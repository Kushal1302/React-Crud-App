
import {Drawer } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import AddIcon from '@mui/icons-material/Add';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
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
            '& > li':{
                fontSize:'20px',
                cursor:'pointer',
                fontWeight:"70",
                '& > svg':{
                    padding:'0 5px 0 0'
                }
            }
            }
            
        }} >
            <ListItem> <AddIcon/>Add Users</ListItem>
            <ListItem><FormatAlignJustifyIcon/>All Users</ListItem>
                
        </Drawer>
    </>)
}
export default SideBar