import { User } from "core/entities/User";
import { UserRepository } from "core/repositories/UserRepository";
import { v4 } from "uuid";


export interface SignInProps {
    email: string;
    password: string;
}

export class SignIn {
    
    constructor(
        private userRepo: UserRepository
    ) {
        
    }

async execute(input: SignInProps):Promise<User> {

    const user = await this.userRepo.getUserByEmail(input.email)
    if (user.props.password===input.password){
        return user
    }

    throw new Error("Password invalid");
     
}

}