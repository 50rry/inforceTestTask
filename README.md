## inforceTestTask
Test task Book API

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```
### Books Endpoints

These endpoints allows access to the books details stored in the database.

#### GET /book

Gets all the books details from the database

#### GET /book/:bookId

Gets a single books details which matches the given id.

#### POST /book

Adds a single books details to the database.

#### PUT /book/:bookId

Updates a books details in the database.

#### DELETE /book/:bookId

Deletes a book and it details (including cover image stored in filesystem if available).
