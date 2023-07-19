import { User } from "core/entities/User";
import { UserRepository } from "core/repositories/UserRepository";
import { Usecase } from "../Usecase";



export interface GetUserByIdCommand {
    userId: string
}


export class GetUserById implements Usecase<GetUserByIdCommand, User> {
    constructor (private userRepository: UserRepository) {

    }

    async execute(paylod: GetUserByIdCommand): Promise<User>{
        const {userId} = paylod
        return await this.userRepository.getUserById(userId);
    }
}