import { InMemoryUserRepository } from "../../adapters/repositories/InMemoryUserRepository";
import { SignUp } from "../usecases/user/SignUp";


describe('Unit - SignUp', () => {
    it("Inscription d'un utilisateur", async () => {
        const userRepository = new InMemoryUserRepository([]);
        const signUp = new SignUp(userRepository)
        const user = await signUp.execute({
            email: "johndoe@gmail.com",
            phoneNumber: "0601020304",
            password: "123456",
            username: "JohnD"
        });
        expect(user.props.email).toEqual('johndoe@gmail.com');
    })
})