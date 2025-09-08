import {  addNewPostDal,getAllPostDal,deletePostDal } from "../dal/Post.dal.js";

// Given an img, description, likes, nameRaised, time  creat a new post , return post new id  if not return -1
export async function addNewPostServices(
  img,description,likes,nameRaised,time
) {
  const newId = await addNewPostDal(img,description,likes,nameRaised,time);
  return newId;
}


// Given nathing  , return all postes ;  if not return []
export async function getAllPostServices(){
  const postes = await getAllPostDal()
  return postes
}

// Given id  , return true or false , if saccses
export async function deletePostServices(id){

  const succses = await deletePostDal(id)
  if (succses){
    return true
  }
  return false 
}