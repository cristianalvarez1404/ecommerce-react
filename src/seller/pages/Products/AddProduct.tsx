import React, { useState } from 'react'
import { menLevelThree } from '../../../data/category/levelThree/menLevelThree'
import { womenLevelThree } from '../../../data/category/levelThree/womenLevelThree'
import { fornitureLevelThree } from '../../../data/category/levelThree/fornitureLevelThree'
import { electronicLevelThree } from '../../../data/category/levelThree/electronicLevelThree'
import { menLevelTwo } from '../../../data/category/levelTwo/menLevelTwo'
import { womenLevelTwo } from '../../../data/category/levelTwo/womenLevelTwo'
import { fornitureLevelTwo } from '../../../data/category/levelTwo/fornitureLevelTwo'
import { electronicLevelTwo } from '../../../data/category/levelTwo/electronicLevelTwo'
import { useFormik } from 'formik'
import { uploadToCloudinary } from '../../../util/uploadToCloudinary'

const categoryTwo:{[key: string]:any[]} = {
  men:menLevelTwo,
  women:womenLevelTwo,
  kids:[],
  home_furniture:fornitureLevelTwo,
  beauty: [],
  electronics: electronicLevelTwo
}
const categoryThree:{[key: string]:any[]} = {
  men:menLevelThree,
  women:womenLevelThree,
  kids:[],
  home_furniture:fornitureLevelThree,
  beauty: [],
  electronics: electronicLevelThree
}

const AddProduct = () => {
  const [uploadImage, setUploadingImage] = useState(false);
  const [snackbarOpen, setOpenSnackbar] = useState(false);

  const formik = useFormik({
    initialValues:{
      title:"",
      descripcion:"",
      mrpPrice:"",
      sellingPrice:"",
      quantity:"",
      color:"",
      images:[],
      category:"",
      category2:"",
      category3:"",
      sizes:""
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const handleImageChange = async (event:any) => {
    const file = event.target.files[0];
    setUploadingImage(true)
    const image = await uploadToCloudinary(file)
    
    formik.setFieldValue("images",[...formik.values.images, image]);
    setUploadingImage(false)
  }

  const handleRemoveImage = async(index:any) => {
    
  }

  const childCategory = (category:any, parentCategory:any) => {
    // return category.filter((child:any) => {
    //   return child.parentCategoryId == parentCategoryId;
    // })
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  }

  return (
    <div>AddProduct</div>
  )
}

export default AddProduct