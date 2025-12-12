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

const categoryTwo = {
  men:menLevelTwo,
  women:womenLevelTwo,
  electronics:electronicLevelTwo,
  home_forniture:fornitureLevelTwo
}

const categoryThree = {
  men:menLevelThree,
  women:womenLevelThree,
  electronics:electronicLevelThree,
  home_forniture: fornitureLevelThree
}

const CategorySheet = () => {

  const childCategory = (category:any,parentCategoryId:any) => {
    return category.filter((child:any) => child.parentCategoryId == parentCategoryId )
  }

  return (
    <Box sx={{zIndex:2}} className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
      <div className='flex flex-col text-sm flex-wrap'>
        {
          categoryTwo["men"]?.map((item) => (
          <div>
            <p className='text-teal-500 mb-5 font-semibold'>{item.name}</p>
            <ul className='space-y-3'>
              {
                childCategory(categoryThree["men"],item.categoryId).map((i:any) => (
                  <div>
                    <li className='hover:text-teal-500 cursor-pointer'>
                      {i?.name}
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