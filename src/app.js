const fs = require('fs');
const path = require('path');
const config = require('../config');
const express = require('express');

const app = express();

const PORT = config.PORT || 1234;

app.listen(PORT, () => {
    console.log(`\nExample app listening on port ${PORT} ...\n`)
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', express.static(path.join(__dirname, '/public', '/index')));

fs.readdir(path.join(__dirname, "routes"), (err, files) => {
    if (!err) {
        files.forEach(file => {
            const routePath = path.join(__dirname, "routes", file);
            const route = require(routePath);

            if (route.path && route.router) app.use(route.path, route.router);
        });
    };
});
