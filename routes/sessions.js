const express = require('express');


const routes = express.Router();

routes.get("/", (req, res, next) => {
    setTimeout(() => {
        res.json({ sessions: ["Sessions1", "Session2"] });
    }, 200);
})

routes.post("/", (req, res, next)=> {
    console.log(req.body);
})

module.exports = routes;