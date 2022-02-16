import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        
        if(!user){
            throw new AppError("Email or Password Incorrect!")
        }

        const passwordMatch = compare(password, user.password);
        
        if (!passwordMatch) {
            throw new AppError("Email or Password Incorrect!")
        }

        const token = sign({}, "7795a7ed819b54d465e63806373b806f", {
            subject: user.id,
            expiresIn: "1d",
        });
        
        const tokenReturn: IResponse = {
            token, 
            user: {
                name: user.name,
                email: user.email
            }
        }
        
        return tokenReturn;
    }

}

export { AuthenticateUserUseCase }