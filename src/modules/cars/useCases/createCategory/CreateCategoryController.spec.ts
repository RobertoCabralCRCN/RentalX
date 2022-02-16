import { hash } from "bcryptjs";
import request from "supertest";
import { Connection } from "typeorm";
import { v4 as uuid } from "uuid";

import { app } from "@shared/infra/http/app";
import createConnection from "@shared/infra/typeorm";


let connection: Connection;

describe("Create Category Controller", async () => {
		beforeAll(async () => {
			connection = await createConnection();
			await connection.runMigrations();

			const id = uuid();
			const password = hash("admin", 8);

			await connection.query(
					`INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license )
			values('${id}', 'admin', 'admin@rentalx.com.br', '${password}', true, 'now()', 'XXXXXX' )
			`,
			);
		})

		afterAll(async () => {
			await connection.dropDatabase();
			await connection.close();
		})

    it("should be able to create a new category", async () => {
				const responseToken = await request(app).post("/sessions").send({
					email: "admin@rentalx.com.br",
					password: "admin",
				}); 
				console.log(responseToken.body);

        const response = await request(app).post("/categories").send({
					name: "Category Supertest",
					description: "Category Supertest",
				});
				expect(response.status).toBe(201);
    });
});
