import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellersTable from '../admin/pages/sellers/SellersTable'
import Coupon from '../admin/pages/coupon/Coupon'
import AddNewCouponForm from '../admin/pages/coupon/AddNewCouponForm'
import GridTable from '../admin/pages/homePage/GridTable'
import ElectronicTable from '../admin/pages/homePage/ElectronicTable'
import ShopByCategoryTable from '../admin/pages/homePage/ShopByCategoryTable'
import Deal from '../admin/pages/homePage/Deal'

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SellersTable/>}/>
        <Route path='/coupon' element={<Coupon/>}/>
        <Route path='/add-coupon' element={<AddNewCouponForm/>}/>
        <Route path='/home-grid' element={<GridTable/>}/>
        <Route path='/electronics' element={<ElectronicTable/>}/>
        <Route path='/shop-by-category' element={<ShopByCategoryTable/>}/>
        <Route path='/deals' element={<Deal/>}/>
      </Routes>
    </div>
  )
}

export default AdminRoutes