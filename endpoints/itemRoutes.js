const express = require("express");

const router = express.Router();

const itemHandler = require("../handlers/itemHandler");

router.post("/create", itemHandler.addNewItem);

router.get("/list", itemHandler.showAllItems);

router.put("/edit/:id", itemHandler.modifyItem);

router.delete("/remove/:id", itemHandler.removeItem);

module.exports = router;