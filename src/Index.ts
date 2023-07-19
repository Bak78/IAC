import { userRouter } from "./app/routers/UserRouter";
import  express from 'express';


const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
    return res.sendStatus(200);
});

app.use('/user', userRouter);
app.listen(3000, () => {
    console.log('server listening on port 3000');
})