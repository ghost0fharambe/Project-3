const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const isAuthenticated = require("../config/middleware/isAuthenticated");

//Matches with "/api/users"
router.route("/")
	.post(usersController.create);

//Matches with "/api/users/:id"
router.route("/:id")
	.delete(usersController.remove);

//Matches with "/api/users/current-user"
router.route("/current-user")
	.get(isAuthenticated, (req, res) => {
		console.log(req.user);
		res.json(req.user);
	});