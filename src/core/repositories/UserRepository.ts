import { User } from "../entities/User";

export interface UserRepository {
    save(user: User): Promise<User>;
    getUserByEmail(email: string):Promise<User>;
    getUserById(userId:string):Promise<User>;
}