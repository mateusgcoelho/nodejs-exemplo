const { Router } = require("express");

const usersData = require("../../users.json");

const usersRoutes = Router();

usersRoutes.get("/", (req, res) => {
    return res.json(usersData);
});

usersRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    usersData.map((user) => {
        if (user.id === Number(id)) {
            return res.json(user);
        }
    });
    
    return res.status(404).json({
        text: "User not found!",
    });
});

module.exports = usersRoutes;