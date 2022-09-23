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
![alt img](https://raw.githubusercontent.com/Bekmirzo/postgresql-joins/main/src/public/index/env.PNG)
### 3. Run this sql files on your PostgreSQL server:
##### Files in `./sql/`
1. create_table.sql
2. cars.sql
3. users.sql

![alt img](https://raw.githubusercontent.com/Bekmirzo/postgresql-joins/main/src/public/index/sql.PNG)

### 4. Run `node ./src/app.js` on terminal
### 5. Open in browser `localhost`:PORT 
##### open console to see port
![alt img](https://raw.githubusercontent.com/Bekmirzo/postgresql-joins/main/src/public/index/port.PNG)
