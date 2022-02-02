import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User"



interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
   
      
    create(data: ICreateUserDTO): Promise<void>;

    findById(id: string): Promise<User>
}


export { IUsersRepository }