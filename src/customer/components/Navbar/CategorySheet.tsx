import React from 'react'
import { menLevelTwo } from '../../../data/category/levelTwo/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/levelTwo/womenLevelTwo'
import { electronicLevelTwo } from '../../../data/category/levelTwo/electronicLevelTwo'
import { fornitureLevelTwo } from '../../../data/category/levelTwo/fornitureLevelTwo'
import { menLevelThree } from '../../../data/category/levelThree/menLevelThree'
import { womenLevelThree } from '../../../data/category/levelThree/womenLevelThree'
import { electronicLevelThree } from '../../../data/category/levelThree/electronicLevelThree'
import { fornitureLevelThree } from '../../../data/category/levelThree/fornitureLevelThree'
import { Box } from '@mui/material'

const categoryTwo:{
  [
    key:string
  ]:any[]
} = {
  men:menLevelTwo,
  women:womenLevelTwo,
  electronics:electronicLevelTwo,
  home_forniture:fornitureLevelTwo
}

const categoryThree:{[key:string]:any[]} = {
  men:menLevelThree,
  women:womenLevelThree,
  electronics:electronicLevelThree,
  home_forniture: fornitureLevelThree
}

const CategorySheet = ({selectedCategory, setShowSheet}:{selectedCategory:any,setShowSheet:any}) => {

  const childCategory = (category:any,parentCategoryId:any) => {
    return category.filter((child:any) => child.parentCategoryId == parentCategoryId )
  }

  return (
    <Box sx={{zIndex:2}} className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
      <div className='h-[500px] flex flex-wrap text-sm '>
        {
          categoryTwo[selectedCategory]?.map((item:any, index) => (
          <div className={`p-8 lg:w-[20%] ${index % 2 === 0 ? "bg-slate-50" : "bg-white"} `}>
            <p className='text-teal-500 mb-5 font-semibold'>{item.name}</p>
            <ul className='space-y-3'>
              {
                childCategory(categoryThree[selectedCategory],item.parentCategoryId).map((item:any, index:any) => (
                  <div>
                    <li className='hover:text-teal-500 cursor-pointer'>
                      {item?.name}
                    </li>
                  </div>
                ))
              }
            </ul>
          </div>
        ))
        }
      </div>
    </Box>
  )
}

export default CategorySheet