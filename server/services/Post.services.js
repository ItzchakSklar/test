import { response } from "express";
import {
  addNewPostDal,
  getAllPostDal,
  deletePostDal,
  updatePostDal,
  getPostDal
} from "../dal/Post.dal.js";
import fs from 'fs';
import https from 'https'; 


// Given an img, description, likes, nameRaised, time  creat a new post , return post new id  if not return -1
export async function addNewPostServices(
  img,
  description,
  nameRaised,
  likes,
  time
) {
  // Here comes a script that takes a URL and downloads the image to /public and returns its name.  
  const imgNewName = Date.now()+".png"
  await saveImgToDisk(img,"./public/"+imgNewName)

const newId = await addNewPostDal(imgNewName, description, likes, nameRaised, time);
return newId;
}


// Given nathing  , return all postes ;  if not return []
export async function getAllPostServices() {
  const postes = await getAllPostDal();
  return postes;
}

// Given id  , return true or false , if saccses
export async function deletePostServices(id) {
  const succses = await deletePostDal(id);
  if (succses) {
    return true;
  }
  return false;
}

// Given id obyect,key,new value, >  return true or flse
export async function updatePostServices(id, key,newValue){
  return await updatePostDal(id, key,newValue);
}

// Given id >  return post if succsys if not return flse
export async function getPostServices(id) {
  const result = await getPostDal(id)
  if(result){
    return result
  }
  else {return false}

}

// Given url and path downloding from internet
export async function saveImgToDisk(url,path){
  const fullUrl = url;
  const localPath = fs.createWriteStream(path)
  const request = https.get(fullUrl,function(response){
    console.log("the file dowlode: ",response);
    response.pipe(localPath)
  })
  console.log("i itzchak");
}