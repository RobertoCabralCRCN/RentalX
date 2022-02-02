import { getRepository, Repository } from "typeorm";
import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarsDTO";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

import { Car } from "../entities/Car";

class CarsRpository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }


    async create({
        name,
        description,
        category_id,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
				specifications,
    }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            name,
            description,
            category_id,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
						specifications,
        });
        await this.repository.save(car);

        return car;
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({
            license_plate,
        });
        return car;
    }

    async findAvailable(
        category_id?: string,
        brand?: string,
        name?: string,
    ): Promise<Car[]> {
        const carsQuery = await this.repository
            .createQueryBuilder("c")
            .where("available = :available", { available: true });

        if (brand) {
            carsQuery.andWhere("brand = :brand", { brand });
        }
        if (name) {
            carsQuery.andWhere("name = :name", { name });
        }
        if (category_id) {
            carsQuery.andWhere("category_id = :category_id", { category_id });
        }

        const cars = await carsQuery.getMany();

        return cars;
    }

		async findById(id: string): Promise<Car> {
			const car = await this.repository.findOne(id);
			return car;
		}
}

export { CarsRpository };
