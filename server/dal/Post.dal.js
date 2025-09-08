import { config } from "dotenv";
import { MongoClient, Db } from "mongodb";
import { ObjectId } from "mongodb";
config();

const client = new MongoClient(process.env.DB_CONNECTION);

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */

export async function connect() {
  if (!db) {
    await client.connect();
    db = client.db("Linkodkod");
    console.log("Connected to MongoDB");
  }
  return db;
}

// Given an img,description,likes,nameRaised,time  creat a new post , return post new id  if not return -1
export async function addNewPostDal(img,description,likes,nameRaised,time) {
  try {
    const db = await connect();
    const result = await db.collection("postes").insertOne({
      img: img,  
      description: description,
      likes: likes,
      nameRaised: nameRaised,
      time: time,
    });
    return result.insertedId.toString();
  } catch (err) {
    console.log(err);
    return -1;
  }
}

// Given nathing  , return all postes ;  if not return []
export async function getAllPostDal() {
  try {
    const db = await connect();
    const result = await db.collection('postes').find().toArray(); 
    return result;
  } catch (err) {
    console.log(err);
    return [];
  }
}

// Given nathing  , return all postes ;  if not return []
export async function deletePostDal(id){
  try {
    const db = await connect();
    const result = await db.collection('postes').deleteOne({_id: new ObjectId(id)});
    console.log(result) 
    return result;
  } catch (err) {
    console.log("file dall",err);
    return false;
  }
}




// export async function chackPostExist(id){
// try {
//     const db = await connect();
//     const result = await db.collection('postes').find({ _id: new ObjectId(id) });
//     // console.log(result) 
//     return result;
//   } catch (err) {
//     console.log("file dall",err);
//     return false;
//   }
// }
