import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { v4 } from "uuid";

export interface SignUpProperties {
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
}

export class SignUp {
    userRepository: UserRepository;

    constructor(
        userRepo: UserRepository
    ) {
        this.userRepository = userRepo;
    }

async execute(input: SignUpProperties): Promise<User> {
    const userExist = await this.userRepository.getUserByEmail(input.email)
    if (userExist) {
        throw new Error("Error user already exist")
    }
    const user = new User({
        email: input.email,
        phoneNumber: input.phoneNumber,
        id: v4(),
        isVerified: false,
        password: input.password,
        username: input.username,
    });
    await this.userRepository.save(user);
    return user;
}

}