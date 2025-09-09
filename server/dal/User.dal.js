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

async function connect() {
  if (!db) {
    await client.connect();
    db = client.db("Linkodkod");
    console.log("Connected to MongoDB");
  }
  return db;
}

export async function getUserDal(email) {
  try {
    const db = await connect();
    const user = await db.collection("user").findOne({
      email: email,
    });
    return user;
  } catch (err) {
    console.log(err);
    return false;
  }
}

// Given name, email, password   he chech if user exsist > return new user id if seccses, -2 if uswer exsist, -1 a connct problem 
export async function singUpDal(name, email, password) {
  try {
    const db = await connect();
    const exsist = await getUserDal();
    if (!exsist) {
      const result = await db.collection("user").insertOne({
        name: name,
        email: email,
        password: password,
      });
      return result.insertedId.toString();
    }
    return -2
  } catch (err) {
    console.log(err);
    return -1;
  }
}
