import { Router, Request, Response } from 'express';
import { SignUp } from '../../core/usecases/user/SignUp';
import { InMemoryUserRepository } from '../../adapters/repositories/InMemoryUserRepository';


const userRouter = Router();

const UserRepository = new InMemoryUserRepository([]);

const signUp = new SignUp(UserRepository);

userRouter.post('/signup', async (req: Request, res: Response) => {
    const result = await signUp.execute({
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        username: req.body.username,
    });
    return res.status(201).send(result);
})

export {userRouter};