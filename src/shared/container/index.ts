import { container } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepostirory";
import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRpository } from "@modules/cars/infra/typeorm/repositories/CarsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository,
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRpository);
