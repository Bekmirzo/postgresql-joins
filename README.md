# Simple  `SQL joins` test
## Install
### 1. Open terminal on project folder and run `npm i`

### 2. Create ` .env` file on project folder like this:
    DB_HOST=your.PostgreSQL.server.host // default localhost
    DB_PORT=PostgreSQL.port             // default 5432
    DB_USER=PostgreSQL.user             // default postgres
    DB_PASSWORD=PostgreSQL.user.pass    // postgres user password 
    DB_NAME=database.name               // your database name
    PORT=80                             //can be any empt port....
### 3. Run this sql files on your PostgreSQL server:
##### Files in `./src/db/`
1. create_table.sql
2. cars.sql
3. users.sql

### 4. Run `node ./src/app.js` on terminal
### 5. Open in browser `localhost`:PORT 
##### open console to see port