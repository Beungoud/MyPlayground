const express = require('express');
const sessions = require("./sessions");


const routes = express.Router();

routes.get("/", (req, res, next) => {
    setTimeout(() => {
        res.json({ sessions: "Coucou" });
    }, 200);
})

routes.use("/sessions", sessions);

module.exports = routes;