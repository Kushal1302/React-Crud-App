import Navbar from "./Navbar";
import SideBar from './SideBar';
import {useState} from 'react';
const  App = () => {
  const [toggle , setToggle] =useState(false);
  const openClose = () => {
     toggle?setToggle(false):setToggle(true)
  }

  return (<>
  <Navbar openClose={openClose}/>
  <SideBar toggle = {toggle}/>
    </>);
}

export default App;
