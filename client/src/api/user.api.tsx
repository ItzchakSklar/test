const PORT = 3004;

// The function is given an email and a password. If it succeeds in connecting, it is stored in local storage and returns true, if not, it returns false.
export async function login(loginR:{email: string, password: string}) {
  console.log("sending login request");
  try {
    const res = await fetch(`http://localhost:${PORT}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginR),
    });
    const message = await res.json();
    if (message.success) {
      console.log("Server response:", message);
      localStorage.setItem("accessToken", message.token);
    }else{
      console.log("Server response: ",message.msg);
    }
    return message.success;
  } catch (err) {
    console.error("Error add post:", err);
    return `Error add post:, ${err}`;
  }
}

export async function register(newUser:{name:string, email: string, password: string}) {
  console.log("sending sing up request for: ",newUser);
//   try {
//     const res = await fetch(`http://localhost:${PORT}/user/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });
//     const message = await res.json();
//     if (message.success) {
//       console.log("Server response:", message);
//       localStorage.setItem("accessToken", message.token);
//     }else{
//       console.log("Server response: ",message.msg);
//     }
//     return message.success;
//   } catch (err) {
//     console.error("Error add post:", err);
//     return `Error add post:, ${err}`;
//   }
}


export async function isEmailExsist(email:string) {
  console.log("sending check if exsist for: ",email);
//   try {
//     const res = await fetch(`http://localhost:${PORT}/user/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newUser),
//     });
//     const message = await res.json();
//     if (message.success) {
//       console.log("Server response:", message);
//       localStorage.setItem("accessToken", message.token);
//     }else{
//       console.log("Server response: ",message.msg);
//     }
//     return message.success;
//   } catch (err) {
//     console.error("Error add post:", err);
//     return `Error add post:, ${err}`;
//   }
    return false
}
