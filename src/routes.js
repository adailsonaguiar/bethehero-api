const express = require("express");
const ongController = require("./database/controllers/ongController");
const incidentController = require("./database/controllers/incidentController");
const profileController = require("./database/controllers/profileController");
const sessionController = require("./database/controllers/sessionController");

const routes = express.Router();

routes.post("/sessions", sessionController.create);

routes.get("/ongs", ongController.index);

routes.post("/ongs", ongController.create);

routes.post("/incidents", incidentController.create);

routes.get("/incidents", incidentController.index);

routes.delete("/incidents/:id", incidentController.delete);

routes.get("/", profileController.index);
module.exports = routes;
