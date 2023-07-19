import { User } from "../../core/entities/User";
import { UserRepository } from "../../core/repositories/UserRepository";

export class InMemoryUserRepository implements UserRepository { 
constructor (private readonly userList: User[]) {
}
    async getUserById(userId: string): Promise<User> {
        return this.userList.find(elm => elm.props.id === userId);
    }
    async save(user: User): Promise<User> {
        this.userList.push(user);
        return user;
    }
    async getUserByEmail(email: string): Promise<User> {
        return this.userList.find(elm => elm.props.email === email);
    }
}
