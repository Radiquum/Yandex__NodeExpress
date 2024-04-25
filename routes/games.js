const gamesRouter = require("express").Router();
const { getAllGamesMiddleware } = require("../middlewares/games");
const {
  sendAllGamesController,
  deleteGameController,
  addGameController,
} = require("../controllers/games");

gamesRouter.get("/games", getAllGamesMiddleware, sendAllGamesController);
gamesRouter.post("/games", getAllGamesMiddleware, addGameController);
gamesRouter.delete("/games/:id", getAllGamesMiddleware, deleteGameController);

module.exports = gamesRouter;
