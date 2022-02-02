import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";


export async function ensureAmdin(
	request: Request,
	response: Response,
	next: NextFunction
) {
	const { id } = request.user;

	const usersRepository = new UsersRepository();
	const user = await usersRepository.findById(id);

	if (!user.isAdmin) {
		throw new AppError("User isen't admin");
	}
	return next();
}