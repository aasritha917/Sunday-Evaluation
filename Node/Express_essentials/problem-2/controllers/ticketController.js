const { readTickets, writeTickets } = require("../models/ticketModel");

// GET all tickets
const getAllTickets = (req, res) => {
  res.json(readTickets());
};

// GET ticket by ID
const getTicketById = (req, res) => {
  const tickets = readTickets();
  const ticket = tickets.find(t => t.id == req.params.id);
  ticket ? res.json(ticket) : res.status(404).json({ error: "Ticket not found" });
};

// POST new ticket
const createTicket = (req, res) => {
  const tickets = readTickets();
  const newTicket = {
    id: tickets.length ? tickets[tickets.length - 1].id + 1 : 1,
    ...req.body,
    status: "pending"
  };
  tickets.push(newTicket);
  writeTickets(tickets);
  res.status(201).json({ message: "Ticket created", ticket: newTicket });
};

// PUT update ticket
const updateTicket = (req, res) => {
  const tickets = readTickets();
  const index = tickets.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Ticket not found" });

  tickets[index] = { ...tickets[index], ...req.body };
  writeTickets(tickets);
  res.json({ message: "Ticket updated", ticket: tickets[index] });
};

// DELETE ticket
const deleteTicket = (req, res) => {
  const tickets = readTickets();
  const updated = tickets.filter(t => t.id != req.params.id);
  if (updated.length === tickets.length) return res.status(404).json({ error: "Ticket not found" });

  writeTickets(updated);
  res.json({ message: "Ticket deleted" });
};

// PATCH resolve ticket
const resolveTicket = (req, res) => {
  const tickets = readTickets();
  const index = tickets.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Ticket not found" });

  tickets[index].status = "resolved";
  writeTickets(tickets);
  res.json({ message: "Ticket resolved", ticket: tickets[index] });
};

module.exports = {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
  resolveTicket
};
