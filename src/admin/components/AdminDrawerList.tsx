import React from 'react'
import DrawerList from '../../component/DrawerList'
import { AccountBox, Logout } from '@mui/icons-material'

const menu = [
  {
    name:"",
    path:"",
    icon:"",
    activeIcon:""
  },
]

const menu2 = [
  {
    name:"Account",
    path:"/seller/account",
    icon:<AccountBox className='text-teal-600'/>,
    activeIcon:<AccountBox className='text-white'/>
  },
  {
    name:"Logout",
    path:"/",
    icon:<Logout className='text-teal-600'/>,
    activeIcon: <Logout className='text-white'/>
  },
]

const AdminDrawerList = ({toggleDrawer}:any) => {
  return (
    <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer}/>
  )
}

export default AdminDrawerList