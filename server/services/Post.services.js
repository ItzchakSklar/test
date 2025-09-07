import {  addNewUserDal } from "../dal/Post.dal.js";

// Given an img,description,likes,nameRaised,time  creat a new post , return post new id  if not return -1
export async function addNewPostServices(
  img,description,likes,nameRaised,time
) {
  const newId = await addNewUserDal(img,description,likes,nameRaised,time);
  return newId;
}
