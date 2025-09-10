import { singUpServices, loginServices } from "../services/User.Services.js";


// Method post , Given user with {name, email ,password}  > send back text
export async function SingUp(req,res){
console.log("server get to add a user metod:",req.method);
  try {
    const { name, email ,password } = req.body;
    if (!name || !email || !password) {
      res.status(400).send("Invalid input 3");
    }
    const id = await singUpServices(name, email ,password);
    if (id != -1 && id != -2) {
        console.log("sending "+`user ${name} added succefuly`);
      res.status(200).send(`user ${name} added succefuly`);
    }else if(id == -2){
      console.error("sending: Email already in use");
        res.status(200).send(`Email already in use`)
    }else {
       console.error("sending Failed adding user");
      res.status(500).send(`Failed to add ${name} to users`);
    }
  } catch (err) {
    console.error("Error adding user", err);
    res.status(500).send("Server error");
  }
}

// Method post , Given {email:email passord:password},  > return token if exsist  if not return text
export async function login(req,res){
  console.log("server get to connect:",req.body);
   try {
    const { email ,password } = req.body;
    if (!email || !password) {
      console.log("sending Invalid input");
      res.status(400).send("Invalid input");
    }
    const token = await loginServices(email ,password);
    console.log(token);
    if (token) {
        console.log("sending token");
      res.status(200).send(token);
    }else {
      console.log("sending: samthing is rong with the input");
      res.status(400).send(`samthing is rong with the input`);
    }
  } catch (err) {
    console.error("sending Servrt error, The error is", err);
    res.status(500).send("Server error");
  }
}


