import { response } from "express";
import {
  addNewPostDal,
  getAllPostDal,
  deletePostDal,
  updatePostDal,
  getPostDal
} from "../dal/Post.dal.js";
// import axios from "axios";  // not used
// import path from "path";     // not used

// Given an img, description, likes, nameRaised, time  creat a new post , return post new id  if not return -1
export async function addNewPostServices(
  img,
  description,
  nameRaised,
  likes,
  time
) {
  // Here comes a script that takes a URL and downloads the image to /public and returns its name.
  
  const newId = await addNewPostDal(img, description, likes, nameRaised, time);
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

// I tried to build something but it doesn't work.
// I took the code from Google by writing:  "script that takes a URL and downloads the image to /public and returns its name by js"

// const imageUrl = img
//  try {
//       const response = await axios({
//           method: 'get',
//           url: imageUrl,
//           responseType: 'stream'
//       });
//       const fileName = path.basename(imageUrl);
//       const filePath = path.join(__dirname, 'public', fileName);
//        const writer = fs.createWriteStream(filePath);
//       response.data.pipe(writer);

//       await new Promise((resolve, reject) => {
//           writer.on('finish', resolve);
//           writer.on('error', reject);
//       });
//   } catch (error) {
//       console.error('Error downloading image:', error);
//       return res.status(500).send('Failed to download image.');
//   }
