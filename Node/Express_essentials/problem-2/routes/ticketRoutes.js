const express = require("express");
const router = express.Router();
const dataCheck = require("../middlewares/dataCheckMiddleware");
const {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
  resolveTicket
} = require("../controllers/ticketController");

router.get("/", getAllTickets);
router.get("/:id", getTicketById);
router.post("/", dataCheck, createTicket);
router.put("/:id", updateTicket);
router.delete("/:id", deleteTicket);
router.patch("/:id/resolve", resolveTicket);

module.exports = router;
