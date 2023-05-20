import Navbar from "./Navbar";
import SideBar from './SideBar';
import {useState} from 'react';
import AddUser from "./AddUser";
import {Routes  ,Route} from 'react-router-dom'
import AllUsers from "./AllUsers";
import EditUser from "./EditUser";
const  App = () => {
  const [toggle , setToggle] =useState(false);
  const openClose = () => {
     toggle?setToggle(false):setToggle(true)
  }

  return (<>
  <Navbar openClose={openClose}/>
  <SideBar toggle = {toggle}/>
  <Routes>
  
    <Route path={'/adduser'} element={<AddUser/>}/>
    <Route path="/allusers" element={<AllUsers/>}/>
    <Route path='/edit/:id' element={<EditUser/>}/>
  </Routes>

    </>);
}

export default App;
