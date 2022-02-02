import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";


interface IRequest {
	car_id: string;
	specifications_id: string[];
}
@injectable()
class CreateCarSpecificationUseCase {
	
	constructor(
		@inject("CarsRepository")
	private	carsRepository: ICarsRepository,

	private specificationsRepository: ISpecificationsRepository
	){}

async execute({ car_id, specifications_id }): Promise<void> {

	const carsExists = await this.carsRepository.findById(car_id);

	if(!carsExists) {
		throw new AppError("Car does not exists!");
	}
	const specifications = await this.specificationsRepository.findByIds(specifications_id);

	carsExists.specifications = specifications;

	await this.carsRepository.create(carsExists)

	console.log(carsExists)
}

}

export { CreateCarSpecificationUseCase } 