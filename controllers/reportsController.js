const db = require("../models");

module.exports = {
	findAll: function (req, res) {
		db.Reports
			.findAll({})
			.then(dbData => res.json(dbData))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Reports
			.findOne({
				where: {
					id: req.params.id
				}
			})
			.then(dbData => res.json(dbData))
			.catch(err => res.status(422).json(err));
	},
	create: function (req, res) {
		var newReport = req.body;
		newReport.UserId = req.user.id;
		db.Reports
			.create(newReport)
			.then(dbData => res.json(dbData))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		db.Reports
			.update(req.body, {
				where: {
					id: req.body.id
				}
			})
			.then(dbData => res.json(dbData))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Reports
			.destroy({
				where: {
					id: req.params.id
				}
			})
			.then(dbData => res.json(dbData))
			.catch(err => res.status(422).json(err));
	}
}