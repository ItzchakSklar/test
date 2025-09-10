import bcrypt from "bcrypt";
import { singUpDal, getUserDal } from "../dal/User.dal.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "dfghjkgfd" 


// Given name, email, password  the function bcrypt the pasword and chech if user exsist > return new user id if seccses, -2 if user exsist, -1 a connct problem 
export async function singUpServices(name, email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const result = await singUpDal(name, email, passwordHash);
  return result;
}


// Given email password if email don't exsist or password don't match return false else return token 
export async function loginServices(email, password) {
  const user = await getUserDal(email);
  if (!user) {
    return false;
  }
  try {
    //  i take this code from here https://stackoverflow.com/questions/40076638/compare-passwords-bcryptjs
    const match = await bcrypt.compare(password, user.password)
    if(match){   
    const token = jwt.sign(
          { name: user.name, email: user.email },
          JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
    return token
    }
    else{
        return false
    }
  } catch (err) {
    console.error(err);
    return "server error";
  }
}
