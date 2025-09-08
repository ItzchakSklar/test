import express from 'express';
import  configRoutes  from './Routes/Config.Routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 3005;

const app = express();
app.use(cors())

app.use(express.json());

app.get("/public:img", (req, res, next)=>{ 
    // i take this code from here https://stackoverflow.com/questions/30610281/how-to-use-static-folder-but-also-use-routing-in-express
    if(req.accepts('application/json') && !req.accepts('html')) {
        return next();
    }
    let img = req.params.img
    // and from here https://www.geeksforgeeks.org/web-tech/express-js-res-sendfile-function/
    const __dirname = 'public';
    return res.sendFile(img, { root: `./${__dirname}` }, (err)=> {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            console.log('Sent:', `${__dirname}/${img}`);
        }
    });
});


configRoutes(app);

app.listen(PORT, () => {
    console.log(`Server runing on http://localhost/${PORT}`);
})

