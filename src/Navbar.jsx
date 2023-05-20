import {AppBar  , Toolbar , IconButton , Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
const Navbar = (props) => {
    return(
        <>
        <AppBar>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={props.openClose} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <strong>C</strong><span>rud</span><strong>A</strong><span>pp</span>
          </Typography>

        </Toolbar>

        </AppBar>
        </>
    )
}
export default Navbar;