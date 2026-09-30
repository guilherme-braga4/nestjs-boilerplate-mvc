# NestJS Boilerplate (MVC)

Starting point for REST APIs with **NestJS**, **Prisma** and **MySQL**. It has one example module, organized in controller, service and repository layers, on top of a generic repository that implements CRUD, pagination and filtering.

## What is included

- **Layered modules**: controller -> service -> repository, wired through injection tokens, so an implementation can be replaced without touching its consumers.
- **Generic repository**: `PrismaRepository<T>` implements the ORM-agnostic `AbstractRepository<T>` with `findAll` (pagination and `contains` filter), `findById`, `create`, `update` and `delete`.
- **Validation**: DTOs with `class-validator` and a global `ValidationPipe`.
- **Error handling**: a global interceptor wraps errors in one response format (`message`, `timestamp`, `route`, `method`).
- **API docs**: Swagger UI at `/docs`.
- **Database**: Prisma schema, migrations and seed script.
- **Configuration**: environment files loaded with `@nestjs/config`.
- **Docker**: Dockerfile and Docker Compose services for the API and MySQL.
- **Tests**: Jest configured, with example specs as a starting point.

## Stack

- NestJS 9 and TypeScript
- Prisma 5 and MySQL
- class-validator and class-transformer
- Swagger (`@nestjs/swagger`)
- Jest
- Docker and Docker Compose

## Setup

Requirements: Node.js 18 (see `.nvmrc`) and a MySQL database.

```bash
git clone https://github.com/guilherme-braga4/nestjs-boilerplate-mvc.git
cd nestjs-boilerplate-mvc
npm install
```

The application and the Prisma scripts read the environment from `.env.dev`. Create it from the example:

```bash
cp .env.example .env.dev
```

| Variable | Description |
|---|---|
| `PORT` | Port of the API (default `3000`) |
| `DATABASE_URL` | Prisma connection string: `mysql://USER:PASSWORD@HOST:3306/DATABASE` |
| `MYSQL_ROOT_PASSWORD` | Root password of the MySQL container |
| `MYSQL_DATABASE` | Database created in the MySQL container |

## Scripts

| Script | Description |
|---|---|
| `npm run start:dev` | Starts the API in watch mode |
| `npm run build` | Compiles the project |
| `npm run prisma-dbpush:dev` | Applies the Prisma schema to the database in `.env.dev` |
| `npm run prisma-seed:dev` | Runs the seed against the database in `.env.dev` |
| `npm test` | Runs Jest |
| `npm run lint` | Runs ESLint |

## Endpoints of the example module

| Method | Route | Description |
|---|---|---|
| `GET` | `/example` | Lists records |
| `GET` | `/example/:id` | Returns one record |
| `POST` | `/example` | Creates a record. Body: `{ "name": "string" }` |
| `PUT` | `/example/:id` | Updates a record |
| `DELETE` | `/example/:id` | Deletes a record |

The list uses `PaginationDto` (`page`, `pageSize`) and `FilterDto` (`filterName`, `filterValue`), and returns `data`, `page`, `pageSize`, `totalPages` and `totalData`.

## Project structure

```
prisma/                  Schema, migrations and seed
src/
  main.ts                Bootstrap: validation, CORS and Swagger
  main.module.ts         Root module, configuration and global interceptor
  database/              Prisma module and service
  dtos/                  Shared DTOs (pagination and filter)
  exceptions/            Global error interceptor and logger
  repositories/          Abstract and Prisma generic repositories
  modules/example/       Example module: controller, service, repository, DTOs and tests
```

## Creating a new module

1. Add the model to `prisma/schema.prisma` and apply it to the database.
2. Copy `src/modules/example` and rename it.
3. Make the repository extend `PrismaRepository<YourModel>`.
4. Import the new module in `src/main.module.ts`.

## Roadmap

- Convert query parameters before validation (`transform` in the `ValidationPipe`) and make the filter optional in the list endpoint.
- Finish the test setup: map the `src/` import alias in Jest, register the injection tokens in the example specs and point the e2e spec to `MainModule`.
- Review the Docker build: move the schema push out of the image build and set the entry point of the production stage.
