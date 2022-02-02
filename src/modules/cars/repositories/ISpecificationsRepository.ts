import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";



interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {

    create({ description, name }: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>
		findByIds(ids: string []): Promise<Specification[]>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO, Specification}
