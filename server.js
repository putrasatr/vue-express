'use strict';

const path = require("path")
const express = require("express")
const http = require("http")
const logger = require("morgan");
const port = 3005
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("port", port)

const indexRouter = require("./routers")
const apiRouter = require("./routers/api")

app.use("/", indexRouter)
app.use("/api", apiRouter)

const server = http.createServer(app)

server.listen(port)