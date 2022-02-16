import { ICreateRentalDTO } from "../dtos/ICreateRentalDTO";
import { Rental } from "../infra/typeorm/entities/Rental";


interface IRentalsRepository {
	findOpnRentalByCar(car_id: string): Promise<Rental>
	findRentalByUser(user_id: string): Promise<Rental>
	create(data: ICreateRentalDTO): Promise<Rental>
}

export { IRentalsRepository }