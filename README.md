**Features:**
Notes application that have a few REST endpoints (CRUD)

**Installing:**

Start the containers by running the following command:

```bash
$ docker-compose up
```

After that you can see in terminal:
```Server is listening on port 4444```

Then you can work with this app
Example:
GET All notes
```http://localhost:4444/notes```

## Creating project was used:

- NodeJS, Express, TypeScript
- Docker
- express-validator
- body-parser
- dotenv, nodemon