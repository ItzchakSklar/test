import express from 'express';
import  configRoutes  from './Routes/Config.Routes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 3005;

const app = express();
app.use(cors())

app.use(express.json());

configRoutes(app);

app.listen(PORT, () => {
    console.log(`Server runing on http://localhost/${PORT}`);
})

