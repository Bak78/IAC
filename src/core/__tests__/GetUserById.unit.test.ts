import { InMemoryUserRepository } from "../../adapters/repositories/InMemoryUserRepository"
import { User } from "../entities/User";
import { GetUserById } from "../../core/usecases/user/GetUserById"



describe ("Unit - GetUserById", () => {

    it("Recover user by id", async () =>{
        const userRepo = new InMemoryUserRepository([]);
        const getUserById = new GetUserById(userRepo);
        const user = User.create({
            username: "John",
            email: "johndoe@gmail.com",
            phoneNumber: "0601020304",
            password: "123456"
        })
        await userRepo.save(user);
        const userId = user.props.id;
        const userCheck:User = await getUserById.execute({
            userId:userId
        });

        expect(userId).toEqual(userCheck.props.id)
          
    })
})