NestJs Learning Project

This project is a comprehensive example of a NestJS application, demonstrating various features and best practices in building scalable and maintainable server-side applications.

## Features

- User management with CRUD operations
- Authentication using JWT
- Logger Middleware
- Role-based access control
- Caching with Redis
- Rate limiting
- MongoDB integration using Mongoose
- API documentation with Swagger
- Helmet for enhanced security

## Project Structure

The project follows a modular structure with the following main components:

- `src/app.module.ts`: Main application module
- `src/users`: User management module
- `src/auth`: Authentication module
- `src/authorization`: Implements role-based access control
- `src/logger`: Logger Middleware
- `src/limit`: Rate Limiting
- `src/UserModel.ts`: Mongoose schema for User model

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your MongoDB connection string in `src/app.module.ts`
4. Run the application: `npm run start:dev`

## API Documentation

API documentation is available through Swagger. After starting the application, visit `/api` to access the Swagger UI.

## Authentication

The project uses JWT for authentication. To access protected routes, include the JWT token in the Authorization header of your requests.

## Authorization

Routes are protected using the `@Roles()` decorator and `RolesGuard`. Users must have the appropriate role to access certain endpoints.

## Logger Middleware

The project includes a custom logger middleware (`LoggerMiddleware`) that logs HTTP requests. It captures the following information for each request:

- Method
- Base URL
- Status code
- Content length
- Response time
- User agent
- IP address

## Caching

Redis is used for caching user data to improve performance. The cache is automatically invalidated and updated when changes are made to user data.

## Rate Limiting

The application includes rate limiting to protect against abuse. The `ThrottlerGuard` is applied to sensitive routes.
## Helmet

This project uses Helmet middleware to set various HTTP headers for app security. Helmet helps protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Authors

- [Suorena Saeedi](https://github.com/ssuorena)

## License

This project is open source and available under the [MIT License](LICENSE).
