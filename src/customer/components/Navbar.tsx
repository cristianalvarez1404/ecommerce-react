import React from 'react'
import { Avatar, Box, Button, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddShoppingCart, FavoriteBorder, Storefront } from '@mui/icons-material';

const Navbar = () => {
  return (
    <>
      <Box>
        <div className=''>
          <div className='flex items-center justify-between px-5 lg:px-20 h-[70px] border-b border-gray-300'>
            <div className='flex items-center gap-2'>
              <IconButton>
                <MenuIcon></MenuIcon>
              </IconButton>
              <h1 className='logo cursor-pointer text-lg md:text-2xl text-[#00927c]'>Ecommerce</h1>
            </div>
            <div>
              <IconButton>
                <SearchIcon/>
              </IconButton>
              {
                true
                  ? <Button className='flex items-center gap-2'>
                    <Avatar
                      sx={{ width: 29, height:29 }}
                      src='https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg'
                    />
                    <h1 className='font-semibold hidden lg:block'>User</h1>
                  </Button>
                  : <Button variant='contained'>Login</Button>
              }
              <IconButton>
                <FavoriteBorder sx={{fontSize:29}}/>
              </IconButton>
              <IconButton>
                <AddShoppingCart className='text-gray-700' sx={{fontSize:29}}/>
              </IconButton>
              <Button startIcon={<Storefront/>} variant='outlined'>
                Become Seller
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Navbar