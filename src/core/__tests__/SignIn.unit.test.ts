
import { InMemoryUserRepository } from "../../adapters/repositories/InMemoryUserRepository"
import { SignIn } from "../usecases/user/SignIn";
import { User } from "../entities/User";
const db = []

describe('Unit - SignIn', () => {
    
    let signIn: SignIn
    let user: User

    beforeEach(() => {
    const userRepository: InMemoryUserRepository = new InMemoryUserRepository(db);
    signIn = new SignIn(userRepository);
    user = User.create({
        username: "John",
        email: "johndoe@gmail.com",
        password:"123456",
        phoneNumber: "0601020304", 
    })
    userRepository.save(user)

    })


    it("must verify if password is valid",async ()=>{
        const result: User = await signIn.execute({
            email: "johndoe@gmail.com",
            password: "123456"
        })
        console.log(user)
        expect(result.props.email).toEqual("johndoe@gmail.com");
    })
    
    it("must return an error if the password is invalid", async ()=>{
        const result = signIn.execute({
            email: "johndoe@gmail.com",
            password: "123",
        })
        console.log(user)
        expect(result).rejects.toThrow("Password invalid");
    })

})