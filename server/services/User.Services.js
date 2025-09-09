import bcrypt from 'bcrypt';
import { singUpDal, } from "../dal/User.dal.js"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.SECRET_KEY || "ertyuasdfggh";

export async function singUpServices(name, email ,password){
    const passwordHash = await bcrypt.hash(password,5);
    console.log("hash password:",passwordHash)
    const result = singUpDal(name, email ,passwordHash)
    return result 
}

export async function loginServices(email,password){
    const user = getUserDal(email)
    if (!user) {return false}
    try{
        const match = await bcrypt.compare(user.password,password)
        if (!match){return false}
        const token = jwt.encode(user, SECRET_KEY, algorithm="HS256")
        console.log("token type :",token.type,"token :", token);
        return token;
    }catch (err){
        console.error(err)
        return ("server error") 
    }
}

// import { loginDal , addNewUser } from "../dal/player.dal.js"
// import { ChachIfUserNameExist, } from "../services/player.services.js"

// export async function login(req, res){
//     const { username, password } = req.body;

//     try {
//         user = loginDal(username);

//         if (!user) {
//             return res.status(401).json({ error: 'שם משתמש או סיסמה שגויים' });
//         }

//         
//         if (!passwordMatch) {
//             return res.status(401).json({ error: 'שם משתמש או סיסמה שגויים' });
//         }

//         if (user.role !== 'admin') {
//             return res.status(403).json({ error: 'אין הרשאה למשתמש זה' });
//         }

//         return res.json({ message: 'התחברות הצליחה', role: user.role });
//     } catch (error) {
//         return res.status(500).json({ error: 'שגיאה בשרת' });
//     }
// };