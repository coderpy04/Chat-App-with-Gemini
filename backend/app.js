import express from "express";
import morgan from "morgan"; // batata hai kis route par request ki thi aur kya status code response me aaya tha
import connect from "./db/db.js";
import userRoute from './routes/user.routes.js'
import projectRoutes from './routes/project.routes.js'
import cookieParser from "cookie-parser"; // cookies ke through login ya profile detect
import cors from 'cors';

connect();

const app = express(); // initialize express

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/users',userRoute);
app.use('/projects',projectRoutes)



app.get('/', (req,res) => {
      res.send('Hello');
});

export default app;

// MongoDb store data in hard disk or SSD
// Redis store data in RAM or memory so its reading and writing speed is much faster than other data base